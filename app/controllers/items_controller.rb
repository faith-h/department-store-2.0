class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]
  before_action :set_department

  def index
    render json: @department.items
  end

  def show
    render json: @item
  end

  def create
    item = @department.items.new(item_params)
    if item.save
      render json: item
    else
      render json: {errors: @item.error}
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: {errors: @item.error}
    end
  end

  def destroy
    @item.destroy
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def set_department
    @department = Department.find(params[:department_id])
  end

  def item_params
    params.require(:item).permit(:name, :desc, :price)
  end
  
end
