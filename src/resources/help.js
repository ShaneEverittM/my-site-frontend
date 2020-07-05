const helpText = `
cr <name>
    create a new file with the name <name>

de <name>
    destroy the named file <name>

op <name>		
    open the named file <name> for reading and writing; display an index value

cl <index>
    close the specified file <index>

rd <index> <mem> <count>
    copy <count> bytes from open file <index> (starting from current position) 
    to memory M (starting at location M[<mem>])

wr <index> <mem> <count>
    copy <count> bytes from memory M (starting at location M[<mem>])
    to open file <index> (starting from current position) 

sk <index> <pos>
    seek: set the current position of the specified file <index> to <pos>

dr
    directory: list the names and lengths of all files

in 
    initialize the system to the original starting configuration

rm <mem> <count>
    copy <count> bytes from memory M staring with position <mem> to output device (terminal or file)

wm <mem> <str>
    copy string <str> into memory M starting with position <mem> from input device (terminal or file)`;
export default helpText;
