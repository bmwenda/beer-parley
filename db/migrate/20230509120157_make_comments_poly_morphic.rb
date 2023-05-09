class MakeCommentsPolyMorphic < ActiveRecord::Migration[6.1]
  def change
    change_table :comments do |t|
      t.remove :review_id, type: :bigint
      reversible do |dir|
        dir.up do
          t.change :body, :text
        end
        dir.down do
          t.change :body, :string
        end
      end
      t.references :commentable, polymorphic: true
      t.references :parent_comment, foreign_key: { to_table: :comments }
    end
  end
end
