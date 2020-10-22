class Api::V1::SneakersController < ApplicationController

    def index
        sneakers = Sneaker.all
        render json: sneakers, include: :bids
        # render json: owners, include: :kittens  <<< this is the skeleton
    end

    def show
        sneaker = Sneaker.find(params[:id])
        render json: sneaker, include: :bids
    end 

    def update
        sneaker = Sneaker.find(params[:id]) 
        sneaker.update(likes: params[:likes])
        render json: sneaker
        #, include: [:user, :bids]
    end 

    def create
        sneaker = Sneaker.new(sneaker_params)
        sneaker.save
        render json: sneaker

    end 

    private 

    def sneaker_params
        params.require(:sneaker).permit( :name, :retail, :image, :likes, :releaseDate )
    end
end
