user = User.create(
  first_name: 'Default',
  email: 'default@email.com',
  password: 'pwsd'
)

Beer.find_or_create_by(
  name: 'Tuckers',
  description: 'Best in the region',
  image_url: 'https://example.com',
  rating_score: rand(-5..5),
  price_score: rand(100),
  abv_score: rand(100),
  ibu_score: rand(120)
)

BeerProfile.create(
  user: user,
  rating_score: 3,
  price_score: 40,
  abv_score: 5,
  ibu_score: 70
)
