class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/all-tasks" do
    all_tasks = Task.all
    all_tasks.to_json
  end

  get "/daily" do
    daily_tasks = Task.where(category_id: 1)
    daily_tasks.to_json
  end

  # get ""

end
