json.array! @beers do |beer|
  json.name beer.name
  json.description beer.description
  json.tagline beer.tagline
  json.image_url beer.image_url
  json.first_brewed beer.first_brewed
  json.abv beer.abv
  json.ibu beer.ibu
  json.srm beer.srm
  json.volume do
    json.value beer.volume
  end
end
