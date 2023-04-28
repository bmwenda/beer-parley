json.array! @reviews do |review|
  json.id review.id
  json.description review.description
  json.rating review.user_rating
  json.likes review.review_likes.size
  json.created_at review.created_at

  json.user do
    json.first_name review.user.first_name
    json.email review.user.email
  end

  json.beer do
    json.name review.beer.name
    json.image_url review.beer.image_url
  end
end
