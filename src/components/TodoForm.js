import React, {Component} from 'react';

class TodoForm extends Component{

    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
          
    }

    handleSubmit(e){
        e.preventDefault(); //Evitamos referescar la página al hacer submit
        this.props.onAddTodo(this.state);
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        });
    }

    handleInputChange(e){
        const { value,name } = e.target;
        this.setState({
            [name]: value
        });

    }

    

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Title" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" className="form-control" placeholder="Responsible" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="Description" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control" value={this.state.priority} placeholder="Priority" onChange={this.handleInputChange}>
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                        <button type="submit" className="btn btn-primary mt-4">Save</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;