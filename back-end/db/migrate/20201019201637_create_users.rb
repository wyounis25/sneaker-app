class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :size
      t.string :style
      t.timestamps
    end
  end
end
