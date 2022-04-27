User.destroy_all
Ingredient.destroy_all
Tag.destroy_all
Recipe.destroy_all
RecipeTag.destroy_all
RecipeIngredient.destroy_all

5.times do 
    User.create(username: (Faker::Color.color_name), email: (Faker::Internet.email), password: "test", password_confirmation: "test", first_name: (Faker::Emotion.noun), last_name: (Faker::Emotion.noun), friend_code: (SecureRandom.hex(5)))
end

40.times do 
    Ingredient.create(name: Faker::Food.fruits )
end

10.times do
    Tag.create(title: Faker::Color.color_name)
end

20.times do
    Recipe.create(name: Faker::Food.fruits, description: Faker::GreekPhilosophers.quote, steps: [Faker::GreekPhilosophers.quote, Faker::GreekPhilosophers.quote, Faker::GreekPhilosophers.quote], prep_time: 2, total_time: 3, user: User.all.sample)
end

50.times do
    RecipeTag.create(recipe: Recipe.all.sample, tag: Tag.all.sample)
end 

50.times do
    RecipeIngredient.create(quantity: Faker::Number.between(from: 1, to: 10) , measurement: "cup", recipe: Recipe.all.sample, ingredient: Ingredient.all.sample)
end
