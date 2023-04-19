class CreateSimilarityScores < ActiveRecord::Migration[6.1]
  def change
    create_table :similarity_scores do |t|
      t.references :user, null: false, foreign_key: true
      t.references :beer, null: false, foreign_key: true
      t.integer :score, default: 0
      t.timestamps
    end
  end
end
