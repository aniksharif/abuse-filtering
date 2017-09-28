//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	v = v.replace(/\bpasta\b/gmi, "daalvaat");
	v = v.replace(/\banal\b/gmi, " ");
	v = v.replace(/\banus\b/gmi, " ");
	v = v.replace(/\barse\b/gmi, " ");
	v = v.replace(/\bass\b/gmi, " ");
	v = v.replace(/\bballsack\b/gmi, " ");
	v = v.replace(/\bballs\b/gmi, " ");
	v = v.replace(/\bbastard\b/gmi, " ");
	v = v.replace(/\bbitch\b/gmi, " ");
	v = v.replace(/\bbiatch\b/gmi, " ");
	v = v.replace(/\bbloody\b/gmi, " ");
	v = v.replace(/\bblowjob\b/gmi, " ");
	v = v.replace(/\bblow job\b/gmi, " ");
	v = v.replace(/\bbollock\b/gmi, " ");
	v = v.replace(/\bbollok\b/gmi, " ");
	v = v.replace(/\bboner\b/gmi, " ");
	v = v.replace(/\bboob\b/gmi, " ");
	v = v.replace(/\bboobs\b/gmi, " ");
	v = v.replace(/\bbugger\b/gmi, " ");
	v = v.replace(/\bbum\b/gmi, " ");
	v = v.replace(/\bbutt\b/gmi, " ");
	v = v.replace(/\bbuttplug\b/gmi, " ");
	v = v.replace(/\bclitoris\b/gmi, " ");
	v = v.replace(/\bcock\b/gmi, " ");
	v = v.replace(/\bcoon\b/gmi, " ");
	v = v.replace(/\bcrap\b/gmi, " ");
	v = v.replace(/\bcunt\b/gmi, " ");
	v = v.replace(/\bdamn\b/gmi, " ");
	v = v.replace(/\bdick\b/gmi, " ");
	v = v.replace(/\bdildo\b/gmi, " ");
	v = v.replace(/\bdyke\b/gmi, " ");
	v = v.replace(/\bfag\b/gmi, " ");
	v = v.replace(/\bfeck\b/gmi, " ");
	v = v.replace(/\bfellate\b/gmi, " ");
	v = v.replace(/\bfellatio\b/gmi, " ");
	v = v.replace(/\bfelching\b/gmi, " ");
	v = v.replace(/\bfuck\b/gmi, " ");
	v = v.replace(/\bf u c k\b/gmi, " ");
	v = v.replace(/\bfudgepacker\b/gmi, " ");
	v = v.replace(/\bfudge packer\b/gmi, " ");
	v = v.replace(/\bflange\b/gmi, " ");
	v = v.replace(/\bGoddamn\b/gmi, " ");
	v = v.replace(/\bfudge-packer\b/gmi, " ");
	v = v.replace(/\bGod damn\b/gmi, " ");
	v = v.replace(/\bhell\b/gmi, " ");
	v = v.replace(/\bhomo\b/gmi, " ");
	v = v.replace(/\bjerk\b/gmi, " ");
	v = v.replace(/\bjizz\b/gmi, " ");
	v = v.replace(/\bknobend\b/gmi, " ");
	v = v.replace(/\bknob end\b/gmi, " ");
	v = v.replace(/\blabia\b/gmi, " ");
	v = v.replace(/\blmao\b/gmi, " ");
	v = v.replace(/\blmfao\b/gmi, " ");
	v = v.replace(/\bmuff\b/gmi, " ");
	v = v.replace(/\bnigger\b/gmi, " ");
	v = v.replace(/\bnigga\b/gmi, " ");
	v = v.replace(/\bomg\b/gmi, " ");
	v = v.replace(/\bpenis\b/gmi, " ");
	v = v.replace(/\bpiss\b/gmi, " ");
	v = v.replace(/\bpoop\b/gmi, " ");
	v = v.replace(/\bprick\b/gmi, " ");
	v = v.replace(/\bpube\b/gmi, " ");
	v = v.replace(/\bpussy\b/gmi, " ");
	v = v.replace(/\bqueer\b/gmi, " ");
	v = v.replace(/\bscrotum\b/gmi, " ");
	v = v.replace(/\bsex\b/gmi, " ");
	v = v.replace(/\bshit\b/gmi, " ");
	v = v.replace(/\bs hit\b/gmi, " ");
	v = v.replace(/\bsh1t\b/gmi, " ");
	v = v.replace(/\bslut\b/gmi, " ");
	v = v.replace(/\bsmegma\b/gmi, " ");
	v = v.replace(/\bspunk\b/gmi, " ");
	v = v.replace(/\btit\b/gmi, " ");
	v = v.replace(/\btosser\b/gmi, " ");
	v = v.replace(/\bturd\b/gmi, " ");
	v = v.replace(/\btwat\b/gmi, " ");
	v = v.replace(/\bvagina\b/gmi, " ");
	v = v.replace(/\bwank\b/gmi, " ");
	v = v.replace(/\bwhore\b/gmi, " ");
	v = v.replace(/\bwtf\b/gmi, " ");
	
	
	
	
	textNode.nodeValue = v;
}