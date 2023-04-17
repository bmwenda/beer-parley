FactoryBot.define do
  factory :review do
    user
    beer
    description { 'A description' }
    user_rating { rand(5) }
  end
end
