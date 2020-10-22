class User < ApplicationRecord
    has_many :bids
    
    #, through: :bids
end
