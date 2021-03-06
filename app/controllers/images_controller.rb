class ImagesController < ApplicationController
  
  def create
    image = Image.new(image_params)
    image.save
    redirect_to root_path
  end

  def destroy
    image = Image.find(params[:id])
    image.destroy
    redirect_to root_path
  end

  private

  def image_params
    params.require(:image).permit(:image)
  end

end
