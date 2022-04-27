class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :description
      t.string :steps
      t.integer :prep_time
      t.integer :total_time
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
