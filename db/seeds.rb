5.times do
  department = Department.create(
    name: Faker::Commerce.department
  )
  5.times do
  department.items.create(
    name: Faker::Commerce.product_name,
    price: Faker::Commerce.price.to_f,
    desc: Faker::Lorem.sentence,
    department_id: department.id
  )
  end
end

puts "Departments seeded"