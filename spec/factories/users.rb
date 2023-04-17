FactoryBot.define do
  factory :user do
    first_name { 'Test' }
    sequence(:email) { |n| "user#{n}@email.com" }
    sequence(:password) { |n| "user#{n}pwd" }
  end
end
