# frozen_string_literal: true

class WeatherController < ApplicationController
  layout "weather"

  def index
    @weather_props = { forecast: "sunny" }
  end
end
