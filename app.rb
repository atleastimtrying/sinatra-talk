require "sinatra"
require 'httparty'

enable :sessions

get "/talk" do
  erb :talk  
end

get "/array" do
  @ages = [12,23,34,45,56,67,78]
  erb :ages
end

post "/word_of_the_moment" do
  session[:word] = params[:word]
  true
end

get "/word_of_the_moment" do
  @word = session[:word]
  erb :word
end

get "/speakers" do
  response = HTTParty.get "http://www.fesuffolk.co.uk/speakers.json"
  @speakers = JSON.parse(response.body)
  erb :speakers
end

get "/times_ten/:int" do
  (params[:int].to_i * 10).to_s
end