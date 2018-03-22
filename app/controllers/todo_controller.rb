class TodoController < ApplicationController
  def index
    @project = Project.includes(:todos)
    respond_to do |format|
      format.html {}
    end
  end

  def update
    @todo = Todo.find(params[:domid])
    @todo.isCompleted = !@todo.isCompleted
    @todo.save
  end

  def create

    @todo = Todo.new(params_add)
    @todo.save
    redirect_to(root_path)
  end
end

private
def params_add
  params.require(:todo).permit(:text, :project_id)
end
