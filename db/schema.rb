# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_05_09_120157) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "beer_profiles", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "rating_score", default: 0
    t.integer "price_score", default: 0
    t.integer "abv_score", default: 0
    t.integer "ibu_score", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_beer_profiles_on_user_id"
  end

  create_table "beers", force: :cascade do |t|
    t.string "name"
    t.string "tagline"
    t.string "first_brewed"
    t.string "description"
    t.string "image_url"
    t.float "abv"
    t.integer "ibu"
    t.float "srm"
    t.integer "volume"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "rating_score", default: 0
    t.integer "price_score", default: 0
    t.integer "abv_score", default: 0
    t.integer "ibu_score", default: 0
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.text "body"
    t.integer "likes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "commentable_type"
    t.bigint "commentable_id"
    t.bigint "parent_comment_id"
    t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable"
    t.index ["parent_comment_id"], name: "index_comments_on_parent_comment_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "review_likes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "review_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["review_id"], name: "index_review_likes_on_review_id"
    t.index ["user_id", "review_id"], name: "index_review_likes_on_user_id_and_review_id", unique: true
    t.index ["user_id"], name: "index_review_likes_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "beer_id", null: false
    t.string "description"
    t.integer "user_rating"
    t.integer "likes", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["beer_id"], name: "index_reviews_on_beer_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "similarity_scores", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "beer_id", null: false
    t.integer "score", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["beer_id"], name: "index_similarity_scores_on_beer_id"
    t.index ["user_id"], name: "index_similarity_scores_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name"
    t.string "email", null: false
    t.integer "reputation", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
    t.string "recovery_password_digest"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "beer_profiles", "users"
  add_foreign_key "comments", "comments", column: "parent_comment_id"
  add_foreign_key "comments", "users"
  add_foreign_key "review_likes", "reviews"
  add_foreign_key "review_likes", "users"
  add_foreign_key "reviews", "beers"
  add_foreign_key "reviews", "users"
  add_foreign_key "similarity_scores", "beers"
  add_foreign_key "similarity_scores", "users"
end
