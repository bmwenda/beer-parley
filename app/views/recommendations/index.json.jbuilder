json.array! @beers do |beer|
  json.name beer.name
  json.description beer.description
  json.tagline beer.tagline
  json.image_url beer.image_url
end
