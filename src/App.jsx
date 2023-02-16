import './App.css'
import React from 'react'
import {marked} from 'marked'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        markdown : '',
    };
    this.updateMarkDown= this.updateMarkDown.bind(this);
  }
    updateMarkDown(markdown){
      this.setState({markdown: markdown})

    }

  render(){
  return (
    <div className="App bg-blue-400">
        <div className="">
            <h1 className="text-center font-bold text-2xl py-5 underline">Markdown Previewer</h1>

          <div className='grid grid-cols-2 gap-4 p-4'>
                <div className='w-full h-full'>
                    <div id="sub-title-1" className=''>
                        <h2 className='text-center font-semibold text-xl mb-4 underline'>Editor</h2>
                    </div>
                    <div >
                      <textarea 
                      id="editor" 
                      className='w-full h-screen p-4 rounded-2xl bg-white border-2 border-slate-500'
                      value={this.state.markdown} 
                      onChange={(e)=>{this.updateMarkDown(e.target.value)}}></textarea>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <div id="sub-title-2">
                        <h2 className='text-center font-semibold text-xl mb-4 underline'>Previewer</h2>
                    </div>
                    <div className='w-full h-screen bg-[#DCDCDC] p-4 rounded-2xl border-2 border-slate-500' 
                    >
                      <div
                      id='preview' 
                      dangerouslySetInnerHTML={{__html:marked(this.state.markdown)}}
                      >

                      </div>
                    </div>
                </div>
          </div>

        </div>
    </div>
  )
  }
}

