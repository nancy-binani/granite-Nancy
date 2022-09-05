# frozen_string_literal: true

FactoryBot.define do
  factory :task do
    association :assigned_user, factory: :user
    association :task_owner, factory: :user
    title { Faker::Lorem.entence[0..49] }
  end
end
