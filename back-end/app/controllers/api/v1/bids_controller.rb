class Api::V1::BidsController < ApplicationController


    def index
        amounts = Bid.all
        render json: amounts
        # render json: owners, include: :kittens  <<< this is the skeleton
    end

    def show
        amount = Bid.find(params[:id])
        render json: amount
       
    end
    def create
        amount = Bid.new(bid_params)
        amount.save
        render json: amount

    end 

    def destroy 
        amount = Bid.find(params[:id])
        amount.destroy
    end 

    private 
    def bid_params
        params.require(:bid).permit(:user_id, :sneaker_id, :amount)
    end

    

end
