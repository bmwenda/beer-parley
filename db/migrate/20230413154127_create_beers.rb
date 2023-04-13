class CreateBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :tagline
      t.string :first_brewed
      t.string :description
      t.string :image_url
      t.float :abv
      t.integer :ibu
      t.float :srm
      t.integer :volume

      t.timestamps
    end
  end
end
