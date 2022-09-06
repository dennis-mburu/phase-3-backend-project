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

  patch "/all-tasks/:id" do
    patch_it = Task.find(params[:id])
    patch_it.update(
      # task: params[:task],
      isDone: params[:isDone],
      # category_id: params[:category_id]
    )
    patch_it.to_json
  end

  get "/all-tasks/:id" do
    task = Task.find(params[:id])
    task.to_json
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
