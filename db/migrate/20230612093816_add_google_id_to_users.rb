class AddGoogleIdToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :google_id, :string
    add_column :users, :avatar_url, :string
  end
end
