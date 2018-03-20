class TodoController < ApplicationController
  def index
    @project = Project.includes(:todos)
    respond_to do |format|
      format.html {}
    end
  end

  def update
  end

  def create
    @todo = Todo.new(params_add)
    @todo.isCompleted = false
    @todo.save
    redirect_to(root_path)
  end
end

private
 def params_add
   params.require(:todo).permit(:text, :project_id)
 end
