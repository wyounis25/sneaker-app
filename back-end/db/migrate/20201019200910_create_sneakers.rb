class CreateSneakers < ActiveRecord::Migration[6.0]
  def change
    create_table :sneakers do |t|
      t.string :name
      t.integer :retail
      t.string :image
      t.integer :likes
      t.string :releaseDate
      t.timestamps
    end
  end
end
