class Bid < ApplicationRecord
    belongs_to :user
    belongs_to :sneaker
end
