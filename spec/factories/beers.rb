FactoryBot.define do
  factory :beer do
    name { 'Beer name' }
    description {'Some description' }
    image_url { 'http://example.com' }
  end
end
