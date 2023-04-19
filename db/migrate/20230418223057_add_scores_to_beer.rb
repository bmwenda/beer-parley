class AddScoresToBeer < ActiveRecord::Migration[6.1]
  def change
    add_column :beers, :rating_score, :integer, default: 0
    add_column :beers, :price_score, :integer, default: 0
    add_column :beers, :abv_score, :integer, default: 0
    add_column :beers, :ibu_score, :integer, default: 0
  end
end
