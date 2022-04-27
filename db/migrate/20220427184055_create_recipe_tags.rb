class CreateRecipeTags < ActiveRecord::Migration[7.0]
  def change
    create_table :recipe_tags do |t|
      t.belongs_to :recipe, null: false, foreign_key: true
      t.belongs_to :tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
