class CreateBeerProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :beer_profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :rating_score, default: 0
      t.integer :price_score, default: 0
      t.integer :abv_score, default: 0
      t.integer :ibu_score, default: 0

      t.timestamps
    end
  end
end
