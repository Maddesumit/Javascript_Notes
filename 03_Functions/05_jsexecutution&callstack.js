/**
Here we see how code execute in js.
how call Stack work inside memory ?

First we see execution context
Second we see call stack(means how fuction goes inside memory and how function exit from that memory ) We see all it in browser Environment.


Execution Context means how js run and execute the file you made.

js run your program in two phase 

If you create js code file , the 1st thing that is created is global EC .
and this global EC refrence is kept inside this keyword. Or Browser ,or diifferent different js environment EC are different . In browser EC this(keyword) contains window object.


Types of EC

1 Global EC
2 Function/Functional EC
or
3 Eval EC (It is property of global object So we say it Global EC )


-> How does js code executed ?

js code run in two phases.

1> Memory Creation phase / Memory Phase
2> Exececution phase 


->Here we see Execution phase in detail

Steps Involved:

1>  Firstly Global EC are created and stored in this(keyword)

2> Memory Phase - All variables are collected and memory allocated to it.
initially all variables assign with undefined.
and all function assign with its defination.
 this step is called first cycle.

3> Execution Phase 
variables are assign with its values.
function creats it own New  Execution context
(And this context contain variable environment and execution thread that perform all execution )

And inside that Memory creation phase and Execution phase  take place for function .
Now function return return-back value to Global/Parent Execution Context. 

And the Fuction Exection context after returning values to parent get deleted/vanishes.

 function  new-Execution context created as many time time as it encounter new function in program.



->Now we explore call Stack.

It is like stack .

First at first at the bottom there is Global EC and further the function EC context are coming as they need to execute and after executing its EC it exit from the stack.

Here Function EC come in LIFO fashion(Last in First Out)  in call Stack

 * 
 */