class HomeController < ApplicationController
  def index
    @images = Image.all
    @image = Image.new
  end
end
