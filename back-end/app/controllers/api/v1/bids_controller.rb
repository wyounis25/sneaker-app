class Api::V1::BidsController < ApplicationController


    def index
        bids = Bid.all
        render json: bids
        # render json: owners, include: :kittens  <<< this is the skeleton
    end

    def show
        bid = Bid.find(params[:id])
        render json: bids
       
    end

    def destroy 
        bid = Bid.find(params[:id])
        bid.destroy
    end 

end
