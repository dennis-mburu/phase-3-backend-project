puts "🌱 Seeding spices..."

# Seed your database here

Task.create(task: "Drink 8 glasses of water", category_id: 1)
Task.create(task: "Read an informative article or book", category_id: 2)
Task.create(task: "Morning workout/stretch", category_id: 1)
Task.create(task: "Learn a new money making skill", category_id: 3)
Task.create(task: "take regular breaks from work", category_id: 2)
Task.create(task: "Plan a get-together with the Mburu's family in 2 weeks time", category_id: 4)
Task.create(task: "Invest 15k in CMMF by this end Month", category_id: 3)
Task.create(task: "Call Jim tomorrow night", category_id: 4)


Category.create(name: "daily")
Category.create(name: "mind-care")
Category.create(name: "finances")
Category.create(name: "people")


puts "✅ Done seeding!"
