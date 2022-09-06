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

  get "/mind-care" do
    mind_tasks = Task.where(category_id: 2)
    mind_tasks.to_json
  end
  
  get "/finances" do
    finance_tasks = Task.where(category_id: 3)
    finance_tasks.to_json
  end

  get "/people" do
    people_tasks = Task.where(category_id: 4)
    people_tasks.to_json
  end

  patch "/all-tasks/:id" do
    patch_it = Task.find(params[:id])
    patch_it.update(
      isDone: params[:isDone],
    )
    patch_it.to_json
  end


  delete "/all-tasks/:id" do
    deleted = Task.find(params[:id])
    deleted.destroy
    deleted.to_json
  end

  post "/all-tasks" do
    new_task = Task.create(
      task: params[:task],
      category_id: params[:category_id],
      isDone: params[:isDone]
    )
    new_task.to_json
  end
end
