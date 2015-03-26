var searchIndex = {};
searchIndex['linked_list'] = {"items":[[0,"","linked_list","An alternative implementation of `std::collections::LinkedList`, featuring experimental\nCursor-based APIs.",null,null],[3,"LinkedList","","An experimental rewrite of LinkedList to provide a more cursor-oriented API.",null,null],[3,"Cursor","","A Cursor is like an iterator, except that it can freely seek back-and-forth, and can\nsafely mutate the list during iteration. This is because the lifetime of its yielded\nreferences are tied to its own lifetime, instead of just the underlying list. This means\ncursors cannot yield multiple elements at once.",null,null],[3,"Iter","","An iterator over references to the items of a `LinkedList`.",null,null],[3,"IterMut","","An iterator over mutable references to the items of a `LinkedList`.",null,null],[3,"IntoIter","","An iterator over mutable references to the items of a `LinkedList`.",null,null],[11,"new","","Makes a new LinkedList.",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"linkedlist"}}],[11,"push_back","","Appends an element to the back of the list.",0,{"inputs":[{"name":"linkedlist"},{"name":"t"}],"output":null}],[11,"push_front","","Appends an element to the front of the list.",0,{"inputs":[{"name":"linkedlist"},{"name":"t"}],"output":null}],[11,"pop_back","","Removes the element at back of the list. Returns None if the list is empty.",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"option"}}],[11,"pop_front","","Removes the element at front of the list. Returns None if the list is empty.",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"option"}}],[11,"front","","Gets the element at the front of the list, or None if empty.",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"option"}}],[11,"back","","Gets the element at the back of the list, or None if empty.",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"option"}}],[11,"front_mut","","Gets the element at the front of the list mutably, or None if empty.",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"option"}}],[11,"back_mut","","Gets the element at the back of the list mutably, or None if empty.",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"option"}}],[11,"insert","","Inserts an element at the given index.",0,{"inputs":[{"name":"linkedlist"},{"name":"usize"},{"name":"t"}],"output":null}],[11,"remove","","Removes the element at the given index. Returns None if the index is out of bounds.",0,{"inputs":[{"name":"linkedlist"},{"name":"usize"}],"output":{"name":"option"}}],[11,"split_at","","Splits the list into two lists at the given index. Returns the right side of the split.\nReturns an empty list if index is out of bounds.",0,{"inputs":[{"name":"linkedlist"},{"name":"usize"}],"output":{"name":"linkedlist"}}],[11,"append","","Appends the given list to the end of this one. The old list will be empty afterwards.",0,{"inputs":[{"name":"linkedlist"},{"name":"linkedlist"}],"output":null}],[11,"splice","","Inserts the given list at the given index. The old list will be empty afterwards.",0,{"inputs":[{"name":"linkedlist"},{"name":"usize"},{"name":"linkedlist"}],"output":null}],[11,"len","","Gets the number of elements in the list.",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"usize"}}],[11,"is_empty","","Whether the list is empty.",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"bool"}}],[11,"clear","","Removes all elements from the list.",0,{"inputs":[{"name":"linkedlist"}],"output":null}],[11,"cursor","","Gets a cursor over the list.",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"cursor"}}],[11,"iter","","Provides a forward iterator.",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"iter"}}],[11,"iter_mut","","Provides a forward iterator with mutable references.",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"itermut"}}],[11,"into_iter","","Consumes the list into an iterator yielding elements by value.",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"intoiter"}}],[11,"reset","","Resets the cursor to lie between the first and last element in the list.",1,{"inputs":[{"name":"cursor"}],"output":null}],[11,"next","","Gets the next element in the list.",1,{"inputs":[{"name":"cursor"}],"output":{"name":"option"}}],[11,"prev","","Gets the previous element in the list.",1,{"inputs":[{"name":"cursor"}],"output":{"name":"option"}}],[11,"peek_next","","Gets the next element in the list, without moving the cursor head.",1,{"inputs":[{"name":"cursor"}],"output":{"name":"option"}}],[11,"peek_prev","","Gets the previous element in the list, without moving the cursor head.",1,{"inputs":[{"name":"cursor"}],"output":{"name":"option"}}],[11,"insert","","Inserts an element at the cursor's location in the list, and moves the cursor head to\nlie before it. Therefore, the new element will be yielded by the next call to `next`.",1,{"inputs":[{"name":"cursor"},{"name":"t"}],"output":null}],[11,"remove","","Removes the next element in the list, without moving the cursor. Returns None if the list\nis empty, or if `next` is the ghost element",1,{"inputs":[{"name":"cursor"}],"output":{"name":"option"}}],[11,"split","","",1,{"inputs":[{"name":"cursor"}],"output":{"name":"linkedlist"}}],[11,"splice","","Inserts the entire list's contents right after the cursor.",1,{"inputs":[{"name":"cursor"},{"name":"linkedlist"}],"output":null}],[11,"seek_forward","","Calls `next` the specified number of times.",1,{"inputs":[{"name":"cursor"},{"name":"usize"}],"output":null}],[11,"seek_backward","","Calls `prev` the specified number of times.",1,{"inputs":[{"name":"cursor"},{"name":"usize"}],"output":null}],[11,"clone","","",2,{"inputs":[{"name":"iter"}],"output":{"name":"iter"}}],[11,"clone","","",3,{"inputs":[{"name":"intoiter"}],"output":{"name":"intoiter"}}],[6,"Item","","",null,null],[11,"next","","",2,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"size_hint","","",2,null],[11,"next_back","","",2,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[6,"Item","","",null,null],[11,"next","","",4,{"inputs":[{"name":"itermut"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"next_back","","",4,{"inputs":[{"name":"itermut"}],"output":{"name":"option"}}],[6,"Item","","",null,null],[11,"next","","",3,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[11,"next_back","","",3,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"drop","","",0,{"inputs":[{"name":"linkedlist"}],"output":null}],[11,"from_iter","","",0,{"inputs":[{"name":"linkedlist"},{"name":"t"}],"output":{"name":"linkedlist"}}],[11,"extend","","",0,{"inputs":[{"name":"linkedlist"},{"name":"t"}],"output":null}],[11,"eq","","",0,{"inputs":[{"name":"linkedlist"},{"name":"linkedlist"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"linkedlist"},{"name":"linkedlist"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"linkedlist"},{"name":"linkedlist"}],"output":{"name":"option"}}],[11,"cmp","","",0,{"inputs":[{"name":"linkedlist"},{"name":"linkedlist"}],"output":{"name":"ordering"}}],[11,"fmt","","",0,{"inputs":[{"name":"linkedlist"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",0,{"inputs":[{"name":"linkedlist"},{"name":"h"}],"output":null}],[11,"clone","","",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"linkedlist"}}],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[11,"into_iter","","",0,{"inputs":[{"name":"linkedlist"}],"output":{"name":"intoiter"}}]],"paths":[[3,"LinkedList"],[3,"Cursor"],[3,"Iter"],[3,"IntoIter"],[3,"IterMut"]]};
initSearch(searchIndex);
