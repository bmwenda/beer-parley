class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.references :beer, null: false, foreign_key: true
      t.string :description
      t.integer :user_rating
      t.integer :likes, default: 0

      t.timestamps
    end
  end
end
