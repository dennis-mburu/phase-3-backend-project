class AddIsDoneColumnToTasks < ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :isDone, :boolean, default: false
  end
end
