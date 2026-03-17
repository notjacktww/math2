export const DATA = {tests:[
{id:"t1",name:"Test 1",date:"Feb 3",color:"#7F77DD",sections:[

{id:"10.1",name:"10.1 Infinite Sequences of Numbers",test:"t1",ptypes:[
{id:"conv",name:"Find the limit / convergence"},
{id:"mct",name:"Monotone Convergence Theorem"}
],questions:[
{n:"1",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{n}{n+1}$",ptype:"conv"},
{n:"2",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{2n-1}{3n+2}$",ptype:"conv"},
{n:"3",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{n^2+1}{2n^2-3}$",ptype:"conv"},
{n:"4",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{\\sin(n)}{n}$",ptype:"conv"},
{n:"5",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{(-1)^n}{n}$",ptype:"conv"},
{n:"6",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = n \\cdot e^{-n}$",ptype:"conv"},
{n:"7",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{\\ln(n)}{n}$. Apply L'Hôpital by treating $n$ as continuous variable $x$.",ptype:"conv"},
{n:"8",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = n^{1/n}$. Hint: take $\\ln a_n$ and apply L'Hôpital.",ptype:"conv"},
{n:"9",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\left(1 + \\frac{1}{n}\\right)^n$. This is a classic — recall the definition of $e$.",ptype:"conv"},
{n:"10",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{n^2}{e^n}$. Apply L'Hôpital twice.",ptype:"conv"},
{n:"11",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{(2n)!}{(2n+2)!}$. Simplify the factorial ratio first.",ptype:"conv"},
{n:"12",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{n!}{n^n}$. Use ratio of consecutive terms to show it goes to 0.",ptype:"conv"},
{n:"13",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{3n+1}{2n-5}$",ptype:"conv"},
{n:"14",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{n^2-4}{n+2}$. Simplify by factoring.",ptype:"conv"},
{n:"15",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{\\cos(n\\pi)}{n+1}$",ptype:"conv"},
{n:"16",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{2^n+3^n}{4^n}$. Divide numerator and denominator by $4^n$.",ptype:"conv"},
{n:"17",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = n \\sin(1/n)$. Substitute $x = 1/n$ and use $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$.",ptype:"conv"},
{n:"18",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\arctan(n)$",ptype:"conv"},
{n:"19",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = n(1 - \\cos(1/n))$. Use known limit or Taylor series.",ptype:"conv"},
{n:"20",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\sqrt{n+1} - \\sqrt{n}$. Rationalize by multiplying by $\\frac{\\sqrt{n+1}+\\sqrt{n}}{\\sqrt{n+1}+\\sqrt{n}}$.",ptype:"conv"},
{n:"21",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\left(1 + \\frac{2}{n}\\right)^n$. Recognize as a limit of the form $(1+a/n)^n \\to e^a$.",ptype:"conv"},
{n:"22",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = n^{2/n}$. Take $\\ln a_n = \\frac{2}{n}\\ln n$ and use L'Hôpital.",ptype:"conv"},
{n:"23",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = (n+2)^{1/n}$. Take $\\ln a_n = \\frac{\\ln(n+2)}{n} \\to 0$.",ptype:"conv"},
{n:"24",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\left(\\frac{n+3}{n+1}\\right)^n$. Rewrite as $\\left(1 + \\frac{2}{n+1}\\right)^n$ and use $(1+a/n)^n \\to e^a$.",ptype:"conv"},
{n:"25",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\left(\\frac{n}{n+1}\\right)^n$. Rewrite as $\\left(1 - \\frac{1}{n+1}\\right)^n \\to e^{-1}$.",ptype:"conv"},
{n:"26",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{2n+3}{n+1} - \\frac{n-1}{n+2}$. Combine fractions first.",ptype:"conv"},
{n:"27",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\sqrt[3]{n^3+n} - n$. Factor out $n$: $n(\\sqrt[3]{1+1/n^2}-1)$ and use binomial approximation.",ptype:"conv"},
{n:"28",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{(-1)^n \\cdot n}{n^2+1}$. Check if $|a_n| \\to 0$ using Squeeze Theorem.",ptype:"conv"},
{n:"29",text:"Determine whether the sequence converges or diverges. If it converges find the limit: $a_n = \\frac{n^2 + \\sin n}{n^2 + 1}$. Use Squeeze Theorem: $-1 \\leq \\sin n \\leq 1$.",ptype:"conv"},
{n:"32",text:"Determine whether the sequence converges or diverges: $a_n = \\frac{n!}{3^n}$. Use ratio test idea: $\\frac{a_{n+1}}{a_n} = \\frac{n+1}{3} \\to \\infty$ so $a_n \\to \\infty$, diverges.",ptype:"conv"},
{n:"33",text:"Determine whether the sequence converges or diverges: $a_n = \\frac{3^n}{n!}$. Show $a_n \\to 0$ by bounding: for $n > 3$, each factor $3/k < 1$.",ptype:"conv"},
{n:"34",text:"Determine whether the sequence converges or diverges: $a_n = \\frac{(2n)!}{(n!)^2}$. This is $C(2n,n)$ — show it diverges using Stirling's approximation or ratio argument.",ptype:"conv"},
{n:"44",text:"A sequence is defined by $a_1=1$ and $a_{n+1} = \\sqrt{2+a_n}$. Use the Monotone Convergence Theorem: show the sequence is bounded above and increasing, then find the limit by solving $L = \\sqrt{2+L}$.",ptype:"mct"},
{n:"45",text:"A sequence is defined recursively. Use the Monotone Convergence Theorem to show it converges: verify it is monotone (check $a_{n+1} \\geq a_n$ or $\\leq a_n$) and bounded, then find the limit by setting $L = f(L)$ and solving.",ptype:"mct"}
]},

{id:"10.2",name:"10.2 Sequences of Functions",test:"t1",ptypes:[
{id:"ptwise",name:"Pointwise convergence"},
{id:"unif",name:"Uniform convergence"}
],questions:[
{n:"1",text:"Find the pointwise limit of $f_n(x) = x/n$ on $(-\\infty,\\infty)$, then determine whether convergence is uniform on $(-\\infty,\\infty)$. Compute $M_n = \\sup|f_n(x)-f(x)|$.",ptype:"ptwise"},
{n:"2",text:"Find the pointwise limit of $f_n(x) = x^n$ on $[0,1]$, then determine whether convergence is uniform on $[0,1]$. Check what happens at $x=1$ separately.",ptype:"ptwise"},
{n:"3",text:"Find the pointwise limit of $f_n(x) = x^n(1-x)$ on $[0,1]$, then determine whether convergence is uniform. Find the maximum of $f_n$ by differentiation.",ptype:"ptwise"},
{n:"4",text:"Find the pointwise limit of $f_n(x) = \\frac{nx}{1+n^2x^2}$ on $(-\\infty,\\infty)$, then determine whether convergence is uniform.",ptype:"ptwise"},
{n:"5",text:"Find the pointwise limit of $f_n(x) = n^2 x \\cdot e^{-nx}$ on $[0,\\infty)$, then determine whether convergence is uniform on $[0,\\infty)$.",ptype:"ptwise"},
{n:"6",text:"Find the pointwise limit of $f_n(x) = \\frac{1}{1+nx}$ on $[0,1]$, then determine whether convergence is uniform. Note $f(0)$ is different from $f(x)$ for $x>0$.",ptype:"ptwise"},
{n:"7",text:"Find the pointwise limit of $f_n(x) = \\frac{\\sin(nx)}{n}$ on $(-\\infty,\\infty)$, then determine whether convergence is uniform. Use $|\\sin(nx)| \\leq 1$.",ptype:"unif"},
{n:"8",text:"Find the pointwise limit of $f_n(x) = \\frac{x^2}{x^2+(1-nx)^2}$ on $[0,1]$, then determine whether convergence is uniform.",ptype:"ptwise"},
{n:"9",text:"Find the pointwise limit of $f_n(x) = \\frac{nx}{1+nx}$ on $[0,\\infty)$, then determine whether convergence is uniform on $[0,\\infty)$ and on $[a,\\infty)$ for $a>0$.",ptype:"ptwise"},
{n:"10",text:"Find the pointwise limit of $f_n(x) = \\cos(x/n)$ on $(-\\infty,\\infty)$, then determine whether convergence is uniform.",ptype:"unif"},
{n:"11",text:"Find the pointwise limit of $f_n(x) = n \\cdot x \\cdot e^{-nx^2}$ on $(-\\infty,\\infty)$, then determine whether convergence is uniform. Find max of $f_n$ by setting $f_n'=0$.",ptype:"ptwise"},
{n:"12",text:"Find the pointwise limit of $f_n(x) = \\frac{\\sin x}{n}$ on $(-\\infty,\\infty)$, then determine whether convergence is uniform.",ptype:"unif"},
{n:"13",text:"Find the pointwise limit of $f_n(x) = x^{1/n}$ on $[1,\\infty)$, then determine whether convergence is uniform on $[1,\\infty)$.",ptype:"unif"},
{n:"14",text:"Find the pointwise limit of $f_n(x) = \\frac{x}{n}e^{-x/n}$ on $[0,\\infty)$, then determine whether convergence is uniform.",ptype:"ptwise"},
{n:"15",text:"Find the pointwise limit of $f_n(x) = \\arctan(nx)$ on $(-\\infty,\\infty)$, then determine whether convergence is uniform. The limit function has a jump discontinuity at $x=0$.",ptype:"ptwise"}
]},

{id:"10.4",name:"10.4 Power Series",test:"t1",ptypes:[
{id:"roc",name:"Radius & interval of convergence"},
{id:"diffint",name:"Differentiate or integrate a power series"}
],questions:[
{n:"1",text:"Find the radius and interval of convergence: $\\sum \\frac{x^n}{n}$. Apply Ratio Test to find $R=1$, then check endpoints $x=1$ (harmonic series) and $x=-1$ (alternating harmonic series).",ptype:"roc"},
{n:"2",text:"Find the radius and interval of convergence: $\\sum \\frac{x^n}{n^2}$. Apply Ratio Test for $R=1$, check endpoints using $p$-series with $p=2$.",ptype:"roc"},
{n:"3",text:"Find the radius and interval of convergence: $\\sum nx^n$. Apply Ratio Test: $\\lim|a_{n+1}/a_n| = |x| \\cdot \\lim(n+1)/n = |x|$. $R=1$, check endpoints.",ptype:"roc"},
{n:"4",text:"Find the radius and interval of convergence: $\\sum \\frac{x^n}{n!}$. Apply Ratio Test: $\\lim|x/(n+1)| = 0$ for all $x$. $R=\\infty$.",ptype:"roc"},
{n:"5",text:"Find the radius and interval of convergence: $\\sum n!x^n$. Apply Ratio Test: $\\lim|(n+1)x| = \\infty$ for $x \\neq 0$. $R=0$, converges only at $x=0$.",ptype:"roc"},
{n:"6",text:"Find the radius and interval of convergence: $\\sum \\frac{(2x)^n}{n}$. Factor out $2^n$: this is $\\sum \\frac{2^n x^n}{n}$. $R=1/2$. Check endpoints $x=1/2$ and $x=-1/2$.",ptype:"roc"},
{n:"7",text:"Find the radius and interval of convergence: $\\sum \\frac{(x-2)^n}{3^n}$. This is a geometric-type series centred at $x=2$. $R=3$. Check endpoints $x=5$ and $x=-1$.",ptype:"roc"},
{n:"8",text:"Find the radius and interval of convergence: $\\sum \\frac{n(x+1)^n}{4^n}$. Centred at $x=-1$. Apply Ratio Test to find $R=4$. Check endpoints.",ptype:"roc"},
{n:"9",text:"Find the radius and interval of convergence: $\\sum \\frac{(-1)^n x^n}{\\sqrt{n}}$. Apply Ratio Test for $R=1$, then use AST and $p$-series to check endpoints $x=1$ and $x=-1$.",ptype:"roc"},
{n:"10",text:"Find the radius and interval of convergence: $\\sum \\frac{x^{2n}}{n}$. Substitute $u=x^2$ so this looks like $\\sum u^n/n$ with $R_u=1$, so $R_x=1$. Check endpoints $x=\\pm 1$.",ptype:"roc"},
{n:"11",text:"Find the radius and interval of convergence: $\\sum \\frac{(2n)! x^{2n}}{(n!)^2}$. Use Ratio Test with the $(2n)!$ and $(n!)^2$ terms — ratio simplifies using factorial reduction.",ptype:"roc"},
{n:"12",text:"Find the radius and interval of convergence: $\\sum \\frac{n^2 x^n}{2^n}$. Apply Ratio Test: $\\lim\\left|\\frac{(n+1)^2}{n^2} \\cdot \\frac{x}{2}\\right| = \\frac{|x|}{2}$. $R=2$. Check endpoints $x=\\pm 2$.",ptype:"roc"},
{n:"13",text:"Find the radius and interval of convergence: $\\sum \\frac{x^n}{n \\cdot 2^n}$. Apply Ratio Test: $\\lim\\left|\\frac{n}{n+1} \\cdot \\frac{x}{2}\\right| = \\frac{|x|}{2}$. $R=2$. Check endpoints using harmonic/alternating harmonic.",ptype:"roc"},
{n:"14",text:"Find the radius and interval of convergence: $\\sum \\frac{(3x-1)^n}{n^3}$. Centred at $x=1/3$. $R=1/3$ from Ratio Test. Check endpoints using $p$-series $p=3$.",ptype:"roc"},
{n:"15",text:"Find the radius and interval of convergence: $\\sum \\frac{(-1)^n(x-3)^n}{n+1}$. Centred at $x=3$. $R=1$. Check both endpoints.",ptype:"roc"},
{n:"16",text:"Find the radius and interval of convergence: $\\sum \\frac{n^2(x+2)^n}{3^n}$. Centred at $x=-2$. $R=3$. At endpoints apply divergence test.",ptype:"roc"},
{n:"17",text:"Find the radius and interval of convergence: $\\sum \\left(\\frac{x}{2}\\right)^n \\cdot \\frac{1}{\\sqrt{n}}$. $R=2$. Check endpoints with $p$-series ($p=1/2$ diverges) and AST.",ptype:"roc"},
{n:"18",text:"Find the radius and interval of convergence: $\\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$. This is the arctan series. $R=1$. Check endpoints: both converge by AST.",ptype:"roc"},
{n:"19",text:"Find the radius and interval of convergence: $\\sum \\frac{(n+1)(x-1)^n}{2^n}$. Centred at $x=1$. Apply Ratio Test to get $R=2$. Check endpoints.",ptype:"roc"},
{n:"20",text:"Find the radius and interval of convergence: $\\sum \\frac{x^n \\ln(n)}{n}$. Apply Ratio Test; $R=1$. At $x=1$: diverges by comparison with $1/n$. At $x=-1$: converges by AST.",ptype:"roc"},
{n:"21",text:"Find the radius and interval of convergence: $\\sum \\binom{2n}{n} x^n$. Use Ratio Test with $\\binom{2n}{n} = \\frac{(2n)!}{(n!)^2}$. Ratio $\\to 4|x|$. $R=1/4$.",ptype:"roc"},
{n:"22",text:"Find the radius and interval of convergence: $\\sum \\frac{(x+3)^n}{n \\cdot 5^n}$. Centred at $x=-3$. $R=5$. Check endpoints using harmonic and alternating harmonic series.",ptype:"roc"},
{n:"23",text:"Find the radius and interval of convergence: $\\sum \\frac{n!(x-2)^n}{(2n)!}$. Apply Ratio Test: ratio $\\to |x-2|/4$. $R=4$ centred at $x=2$.",ptype:"roc"},
{n:"24",text:"Find the radius and interval of convergence: $\\sum (\\sin n)x^n$. Apply Root Test: $\\limsup|\\sin n|^{1/n} = 1$. $R=1$. Endpoint check: $|\\sin n|$ does not go to $0$, diverges at both.",ptype:"roc"},
{n:"25",text:"Find the radius and interval of convergence: $\\sum (3^n + (-2)^n)x^n$. Factor: largest coefficient grows like $3^n$. $R=1/3$.",ptype:"roc"},
{n:"26",text:"Find the radius and interval of convergence: $\\sum \\frac{(x-1)^{2n}}{9^n}$. Let $u=(x-1)^2$, this is $\\sum (u/9)^n$ which converges when $|u|<9$, i.e. $|x-1|<3$. $R=3$.",ptype:"roc"},
{n:"27",text:"Find the radius and interval of convergence: $\\sum \\frac{(-4)^n(x+2)^{2n}}{n}$. Substitute $u=(x+2)^2$, series is $\\sum \\frac{(-4u)^n}{n}$. Converges when $|-4u|<1$, so $|x+2|<1/2$.",ptype:"roc"},
{n:"28",text:"Find the radius and interval of convergence: $\\sum n^n x^n$. Apply Root Test: $\\lim n^{n \\cdot 1/n}|x| = \\lim n|x| = \\infty$ unless $x=0$. $R=0$.",ptype:"roc"},
{n:"29",text:"Find the radius and interval of convergence: $\\sum (\\ln n) x^n$. Apply Root Test: $\\lim(\\ln n)^{1/n} = 1$. $R=1$. At endpoints: $\\ln n \\to \\infty$ so diverges.",ptype:"roc"},
{n:"30",text:"Find the radius and interval of convergence: $\\sum \\frac{(x-a)^n}{b^n}$ for constants $a$, $b$ with $b>0$. This is geometric centred at $x=a$ with $R=|b|$. Converges for $|x-a|<b$.",ptype:"roc"},
{n:"31",text:"Given the power series $\\sum c_n x^n$ has $R=3$, find the radius of convergence of $\\sum c_n x^{2n}$. Substitute $u=x^2$: converges when $|u|<3$, i.e. $|x|<\\sqrt{3}$. New $R=\\sqrt{3}$.",ptype:"roc"},
{n:"32",text:"Given the power series $\\sum c_n x^n$ has $R=3$, find the radius of convergence of $\\sum c_n(x-2)^n$. The radius of convergence is unchanged at $R=3$ — only the centre shifts.",ptype:"roc"},
{n:"33",text:"Given the power series $\\sum c_n x^n$ has $R=3$, find the radius of convergence of $\\sum n \\cdot c_n x^n$. Differentiation does not change the radius: $R=3$.",ptype:"diffint"},
{n:"34",text:"Given the power series $\\sum c_n x^n$ has $R=3$, find the radius of convergence of $\\sum \\frac{c_n x^n}{n}$. Integration does not change the radius: $R=3$.",ptype:"diffint"},
{n:"35",text:"Given the power series $\\sum c_n x^n$ has $R=3$, find the radius of convergence of $\\sum c_n 2^n x^n = \\sum c_n(2x)^n$. Replace $x$ by $2x$: converges when $|2x|<3$, so $R=3/2$.",ptype:"roc"},
{n:"36",text:"Differentiate the power series $f(x)=\\sum \\frac{x^n}{n!}$ term-by-term to verify $f'(x) = f(x)$. This confirms the series represents $e^x$.",ptype:"diffint"},
{n:"37",text:"Integrate the power series $\\sum \\frac{(-1)^n x^{2n}}{(2n)!}$ term-by-term from $0$ to $x$ to find a series for $\\sin x$. Verify the result matches the known Maclaurin series.",ptype:"diffint"}
]},

{id:"10.6",name:"10.6 Sums of Power Series",test:"t1",ptypes:[
{id:"closed",name:"Closed-form sum from known series"},
{id:"numeval",name:"Evaluate a numerical series"}
],questions:[
{n:"1",text:"Find the sum of $\\sum x^n \\cdot n$ for $|x|<1$. Start from $\\frac{1}{1-x}=\\sum x^n$, differentiate both sides: $\\frac{1}{(1-x)^2} = \\sum n x^{n-1}$, then multiply by $x$.",ptype:"closed"},
{n:"2",text:"Find the sum of $\\sum n x^{n-1}$ for $|x|<1$. Differentiate $\\frac{1}{1-x}=\\sum x^n$ directly: $\\frac{d}{dx}\\left[\\frac{1}{1-x}\\right] = \\frac{1}{(1-x)^2} = \\sum n x^{n-1}$.",ptype:"closed"},
{n:"3",text:"Find the sum of $\\sum \\frac{x^n}{n}$ for $|x|<1$ and $x=-1$. Integrate $\\frac{1}{1-x}=\\sum x^n$ term-by-term from $0$ to $x$: $-\\ln(1-x) = \\sum \\frac{x^n}{n}$. At $x=-1$: $\\sum \\frac{(-1)^n}{n} = -\\ln 2$.",ptype:"closed"},
{n:"4",text:"Find the sum of $\\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$. Recognize this as the arctan series. Sum $= \\arctan(x)$ for $|x| \\leq 1$.",ptype:"closed"},
{n:"5",text:"Find the sum of $\\sum \\frac{(-1)^n}{2n+1}$. This is the arctan series evaluated at $x=1$: $\\arctan(1) = \\pi/4$.",ptype:"numeval"},
{n:"6",text:"Find the sum of $\\sum \\frac{(-1)^n x^{2n}}{(2n)!}$. Recognize this as the Maclaurin series for $\\cos x$. Sum $= \\cos x$.",ptype:"closed"},
{n:"7",text:"Find the sum of $\\sum \\frac{x^{2n+1}}{(2n+1)!}$. This is the $\\sinh$ series: $\\sinh x = \\sum \\frac{x^{2n+1}}{(2n+1)!}$. Or verify by comparing with $e^x$ and $e^{-x}$.",ptype:"closed"},
{n:"8",text:"Find the sum of $\\sum n(n-1)x^n$ for $|x|<1$. Differentiate $\\frac{1}{(1-x)^2} = \\sum n x^{n-1}$ to get $\\frac{2}{(1-x)^3} = \\sum n(n-1)x^{n-2}$, then multiply by $x^2$.",ptype:"closed"},
{n:"9",text:"Find the sum of $\\sum \\frac{x^n}{n(n+1)}$. Use partial fractions: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. Then $\\sum \\frac{x^n}{n} - \\sum \\frac{x^n}{n+1} = -\\ln(1-x) - \\left(-\\frac{\\ln(1-x)}{x} + \\ldots\\right)$. Work carefully with the two known series.",ptype:"closed"},
{n:"10",text:"Find the sum of $\\sum (-1)^n x^{2n}$ for $|x|<1$. This is a geometric series in $u=-x^2$: $\\sum (-x^2)^n = \\frac{1}{1+x^2}$.",ptype:"closed"},
{n:"11",text:"Find the numerical sum $\\sum \\frac{(-1)^n}{n} \\cdot \\left(\\frac{1}{2}\\right)^n$. This is the $\\ln$ series evaluated at $x=1/2$: $\\sum \\frac{(-1)^{n+1}(1/2)^n}{n} = \\ln(1+1/2) = \\ln(3/2)$... check sign convention carefully.",ptype:"numeval"},
{n:"12",text:"Find the sum of $\\sum \\frac{(2x)^n}{n}$ for $|x|<1/2$. This is $-\\ln(1-2x)$ by recognizing $\\sum \\frac{u^n}{n} = -\\ln(1-u)$ with $u=2x$.",ptype:"closed"},
{n:"13",text:"Find the sum of $\\sum n^2 x^n$ for $|x|<1$. Start from $\\sum nx^n = \\frac{x}{(1-x)^2}$, differentiate to get $\\sum n^2 x^{n-1} = \\frac{1+x}{(1-x)^3}$, then multiply by $x$: $\\sum n^2 x^n = \\frac{x(1+x)}{(1-x)^3}$.",ptype:"closed"},
{n:"14",text:"Find the sum of $\\sum \\frac{(-1)^n \\cdot 3^{2n+1}}{2n+1} \\cdot \\left(\\frac{1}{\\pi}\\right)^{2n+1}$. This is the arctan series evaluated at $x=3/\\pi$: sum $= \\arctan(3/\\pi)$.",ptype:"numeval"},
{n:"15",text:"Find the sum of $\\sum (n+1)x^n$ for $|x|<1$. Note $\\sum(n+1)x^n = \\frac{d}{dx}\\left[\\sum x^{n+1}\\right] = \\frac{d}{dx}\\left[\\frac{x}{1-x}\\right] = \\frac{1}{(1-x)^2}$.",ptype:"closed"}
]},

{id:"10.8",name:"10.8 Taylor Series — Binomial",test:"t1",ptypes:[
{id:"binom",name:"Binomial series expansion"}
],questions:[
{n:"1",text:"Use the binomial series to expand $\\frac{1}{\\sqrt{1+x}} = (1+x)^{-1/2}$ as a power series. Write out the first four terms and give the general term. Converges for $|x|<1$.",ptype:"binom"},
{n:"2",text:"Use the binomial series to expand $\\sqrt{1+x} = (1+x)^{1/2}$ as a power series. Write out the first four terms. Converges for $|x|<1$.",ptype:"binom"},
{n:"3",text:"Use the binomial series to expand $\\frac{1}{(1+x)^2} = (1+x)^{-2}$. Write the general term $C(-2,n) \\cdot x^n$. Simplify: $C(-2,n) = (-1)^n(n+1)$. Converges for $|x|<1$.",ptype:"binom"},
{n:"4",text:"Use the binomial series to expand $(1-x^2)^{1/2}$. Substitute $-x^2$ for $x$ in the $\\sqrt{1+x}$ series. State the interval of convergence.",ptype:"binom"},
{n:"5",text:"Use the binomial series to expand $\\frac{1}{\\sqrt{4+x}}$. First factor: $\\frac{1}{\\sqrt{4+x}} = \\frac{1}{2} \\cdot (1+x/4)^{-1/2}$. Then apply the binomial series with $x$ replaced by $x/4$. State the interval of convergence.",ptype:"binom"}
]},

{id:"10.9",name:"10.9 Infinite Series — Convergence Tests",test:"t1",ptypes:[
{id:"geom",name:"Geometric series & p-series"},
{id:"div",name:"Divergence test"},
{id:"comp",name:"Comparison & Limit Comparison"},
{id:"ratio",name:"Ratio & Root tests"},
{id:"inttest",name:"Integral test"}
],questions:[
{n:"1",text:"Determine convergence or divergence: $\\sum \\frac{1}{n^2}$. Identify as $p$-series with $p=2>1$. Converges.",ptype:"geom"},
{n:"2",text:"Determine convergence or divergence: $\\sum \\frac{1}{\\sqrt{n}} = \\sum n^{-1/2}$. $p$-series with $p=1/2<1$. Diverges.",ptype:"geom"},
{n:"3",text:"Determine convergence or divergence: $\\sum (2/3)^n$. Geometric series with $r=2/3$, $|r|<1$. Converges to $\\frac{1}{1-2/3}=3$.",ptype:"geom"},
{n:"4",text:"Determine convergence or divergence: $\\sum \\frac{3^n}{4^n} = \\sum (3/4)^n$. Geometric with $r=3/4$. Converges.",ptype:"geom"},
{n:"5",text:"Determine convergence or divergence: $\\sum \\frac{n}{n+1}$. Divergence test: $\\lim \\frac{n}{n+1} = 1 \\neq 0$. Diverges.",ptype:"div"},
{n:"6",text:"Determine convergence or divergence: $\\sum \\frac{1}{n(n+1)}$. Use partial fractions: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. This is a telescoping series. Converges to $1$.",ptype:"geom"},
{n:"7",text:"Determine convergence or divergence: $\\sum \\frac{n}{n^2+1}$. Compare with $1/n$: use Limit Comparison with $b_n=1/n$. $L = \\lim \\frac{n^2}{n^2+1} = 1$. Since $\\sum 1/n$ diverges, this diverges.",ptype:"comp"},
{n:"8",text:"Determine convergence or divergence: $\\sum \\frac{1}{n^2+1}$. Compare with $1/n^2$. Limit Comparison: $L = \\lim \\frac{n^2}{n^2+1} = 1$. Since $\\sum 1/n^2$ converges ($p=2$), this converges.",ptype:"comp"},
{n:"9",text:"Determine convergence or divergence: $\\sum \\sin(1/n)$. Limit Comparison with $1/n$: $\\lim \\frac{\\sin(1/n)}{1/n} = 1$. Since $\\sum 1/n$ diverges, $\\sum \\sin(1/n)$ diverges.",ptype:"comp"},
{n:"10",text:"Determine convergence or divergence: $\\sum \\frac{n!}{(2n)!}$. Ratio Test: $\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{(2n+2)!} \\cdot \\frac{(2n)!}{n!} = \\frac{n+1}{(2n+2)(2n+1)} \\to 0$. Converges.",ptype:"ratio"},
{n:"11",text:"Determine convergence or divergence: $\\sum \\frac{n^n}{n!}$. Ratio Test: $\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^{n+1}}{(n+1)!} \\cdot \\frac{n!}{n^n} = \\left(\\frac{n+1}{n}\\right)^n \\to e > 1$. Diverges.",ptype:"ratio"},
{n:"12",text:"Determine convergence or divergence: $\\sum \\frac{n^2}{2^n}$. Ratio Test: $\\frac{(n+1)^2}{2^{n+1}} \\cdot \\frac{2^n}{n^2} = \\frac{(n+1)^2}{2n^2} \\to \\frac{1}{2} < 1$. Converges.",ptype:"ratio"},
{n:"13",text:"Determine convergence or divergence: $\\sum \\left(\\frac{n}{n+1}\\right)^n$. Divergence test: $\\lim\\left(\\frac{n}{n+1}\\right)^n = \\lim\\left(1-\\frac{1}{n+1}\\right)^n = e^{-1} \\neq 0$. Diverges.",ptype:"div"},
{n:"14",text:"Determine convergence or divergence: $\\sum \\frac{1}{n \\ln n}$. Integral test: $\\int \\frac{dx}{x \\ln x} = \\ln(\\ln x)$. This diverges as $x \\to \\infty$. Series diverges.",ptype:"inttest"},
{n:"15",text:"Determine convergence or divergence: $\\sum \\frac{1}{n(\\ln n)^2}$. Integral test: $\\int \\frac{dx}{x(\\ln x)^2} = -\\frac{1}{\\ln x}$. Converges. Series converges.",ptype:"inttest"},
{n:"16",text:"Determine convergence or divergence: $\\sum \\frac{\\arctan(n)}{n^2+1}$. Integral test: $\\int \\frac{\\arctan(x)}{x^2+1}dx = \\frac{(\\arctan x)^2}{2}$. Converges. Series converges.",ptype:"inttest"},
{n:"17",text:"Determine convergence or divergence: $\\sum ne^{-n}$. Integral test: $\\int xe^{-x}dx$ converges (integration by parts). Series converges. Or use Ratio Test: ratio $\\to e^{-1} < 1$.",ptype:"inttest"},
{n:"18",text:"Determine convergence or divergence: $\\sum \\frac{1}{2n-1} = 1 + \\frac{1}{3} + \\frac{1}{5} + \\ldots$ Limit Comparison with $1/n$: $L=2$. Since $\\sum 1/n$ diverges, this diverges.",ptype:"comp"},
{n:"19",text:"Determine convergence or divergence: $\\sum \\left(1+\\frac{1}{n}\\right)^n$. Divergence test: $\\lim\\left(1+\\frac{1}{n}\\right)^n = e \\neq 0$. Diverges.",ptype:"div"},
{n:"20",text:"Determine convergence or divergence: $\\sum \\frac{1}{n+\\sqrt{n}}$. Direct comparison: $\\frac{1}{n+\\sqrt{n}} < \\frac{1}{n}$ but $\\frac{1}{n}$ diverges (wrong direction). Use Limit Comparison with $1/n$: $L=1$. Diverges.",ptype:"comp"},
{n:"21",text:"Determine convergence or divergence: $\\sum (-1)^n \\cdot n^2$. Divergence test: $\\lim n^2 = \\infty \\neq 0$. Diverges.",ptype:"div"},
{n:"22",text:"Determine convergence or divergence: $\\sum \\frac{\\cos(n\\pi)}{n} = \\sum \\frac{(-1)^n}{n}$. This is the alternating harmonic series — use AST. Converges conditionally.",ptype:"comp"},
{n:"29",text:"Determine convergence or divergence using the Ratio Test: $\\sum \\frac{n^3}{3^n}$. Ratio: $\\frac{(n+1)^3}{3^{n+1}} \\cdot \\frac{3^n}{n^3} = \\frac{(1+1/n)^3}{3} \\to \\frac{1}{3} < 1$. Converges.",ptype:"ratio"},
{n:"30",text:"Determine convergence or divergence using the Ratio Test: $\\sum \\frac{(2n)!}{(n!)^2 \\cdot 4^n}$. Ratio: $\\frac{(2n+2)!}{((n+1)!)^2 \\cdot 4^{n+1}} \\cdot \\frac{(n!)^2 \\cdot 4^n}{(2n)!} = \\frac{(2n+1)(2n+2)}{(n+1)^2 \\cdot 4} = \\frac{4n^2+6n+2}{4n^2+8n+4} \\to 1$. Ratio Test inconclusive; try Stirling.",ptype:"ratio"},
{n:"31",text:"Determine convergence or divergence using the Ratio Test: $\\sum \\frac{2^n \\cdot n!}{n^n}$. Ratio: $\\frac{2^{n+1}(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{2^n \\cdot n!} = 2 \\cdot \\left(\\frac{n}{n+1}\\right)^n = 2 \\cdot \\left(1-\\frac{1}{n+1}\\right)^n \\to \\frac{2}{e} < 1$. Converges.",ptype:"ratio"},
{n:"32",text:"Determine convergence or divergence using the Root Test: $\\sum \\left(\\frac{n}{n+1}\\right)^{n^2}$. Root Test: $\\lim\\left[\\left(\\frac{n}{n+1}\\right)^{n^2}\\right]^{1/n} = \\lim\\left(\\frac{n}{n+1}\\right)^n = \\lim\\left(1-\\frac{1}{n+1}\\right)^n = e^{-1} < 1$. Converges.",ptype:"ratio"}
]},

{id:"10.10",name:"10.10 Absolute & Conditional Convergence",test:"t1",ptypes:[
{id:"abscon",name:"Classify: absolutely convergent, conditionally convergent, or divergent"},
{id:"altseries",name:"Alternating Series Test + error estimate"}
],questions:[
{n:"1",text:"Classify $\\sum \\frac{(-1)^n}{n}$: test $\\sum|a_n|=\\sum 1/n$ (diverges — harmonic). Apply AST: $1/n$ decreasing, $\\to 0$. Conditionally convergent.",ptype:"abscon"},
{n:"2",text:"Classify $\\sum \\frac{(-1)^n}{n^2}$: test $\\sum|a_n|=\\sum 1/n^2$ ($p$-series $p=2$, converges). Absolutely convergent.",ptype:"abscon"},
{n:"3",text:"Classify $\\sum \\frac{(-1)^n \\cdot n}{n^2+1}$: test $\\sum|a_n|$ — Limit Comparison with $1/n$ shows diverges. Apply AST: check $a_n=\\frac{n}{n^2+1}$ is decreasing (differentiate) and $\\to 0$. Conditionally convergent.",ptype:"abscon"},
{n:"4",text:"Classify $\\sum \\frac{(-1)^n}{\\sqrt{n}}$: $\\sum|a_n|=\\sum n^{-1/2}$, $p=1/2<1$, diverges. AST: $1/\\sqrt{n}$ decreasing $\\to 0$. Conditionally convergent.",ptype:"abscon"},
{n:"5",text:"Classify $\\sum \\frac{(-1)^n n!}{(2n)!}$: Ratio Test on $\\sum|a_n|$: ratio $\\to 0 < 1$. Absolutely convergent.",ptype:"abscon"},
{n:"6",text:"Classify $\\sum \\frac{(-1)^n \\cdot n^2}{2^n}$: Ratio Test on $\\sum|a_n|$: ratio $\\to 1/2 < 1$. Absolutely convergent.",ptype:"abscon"},
{n:"7",text:"Classify $\\sum \\frac{\\sin(n)}{n^2}$: $\\sum|\\sin(n)/n^2| \\leq \\sum 1/n^2$ which converges. Absolutely convergent by comparison.",ptype:"abscon"},
{n:"8",text:"Classify $\\sum (-1)^n(\\sqrt{n+1}-\\sqrt{n})$: note $\\sqrt{n+1}-\\sqrt{n} = \\frac{1}{\\sqrt{n+1}+\\sqrt{n}} \\sim \\frac{1}{2\\sqrt{n}}$. $\\sum|a_n| \\sim \\sum \\frac{1}{2\\sqrt{n}}$ diverges. AST: check decreasing and $\\to 0$. Conditionally convergent.",ptype:"altseries"},
{n:"9",text:"Use the Alternating Series Estimation: how many terms of $\\sum \\frac{(-1)^{n+1}}{n}$ are needed to approximate the sum within $0.01$? Need $a_n = 1/n \\leq 0.01$, so $n \\geq 100$. At least 100 terms.",ptype:"altseries"},
{n:"10",text:"Use the Alternating Series Estimation: how many terms of $\\sum \\frac{(-1)^n}{n!}$ are needed to approximate the sum $(= 1/e - 1)$ within $0.001$? Error $\\leq a_{n+1} = \\frac{1}{(n+1)!}$. Try $n=6$: $1/7! \\approx 0.0002 < 0.001$. Six terms suffice.",ptype:"altseries"},
{n:"11",text:"Classify $\\sum \\frac{\\cos(n\\pi)}{n \\ln n} = \\sum \\frac{(-1)^n}{n \\ln n}$ for $n \\geq 2$: $\\sum|a_n|=\\sum \\frac{1}{n \\ln n}$ diverges (integral test). AST: $\\frac{1}{n \\ln n}$ decreasing $\\to 0$. Conditionally convergent.",ptype:"abscon"},
{n:"12",text:"Classify $\\sum (-1)^n \\cdot (2/3)^n$: geometric with $|r|=2/3<1$. $\\sum|a_n|=\\sum(2/3)^n$ converges. Absolutely convergent.",ptype:"abscon"}
]},

{id:"10.11",name:"10.11 Power Series & Differentiation/Integration",test:"t1",ptypes:[
{id:"manip",name:"Express a function as a power series"}
],questions:[
{n:"1",text:"Find a power series representation for $\\frac{1}{1+x}$. Start from $\\frac{1}{1-x}=\\sum x^n$; substitute $-x$: $\\frac{1}{1+x} = \\sum (-1)^n x^n$ for $|x|<1$.",ptype:"manip"},
{n:"2",text:"Find a power series representation for $\\frac{1}{(1-x)^2}$. Differentiate $\\frac{1}{1-x}=\\sum x^n$: $\\frac{1}{(1-x)^2} = \\sum n x^{n-1} = \\sum(n+1)x^n$ for $|x|<1$.",ptype:"manip"},
{n:"3",text:"Find a power series representation for $\\ln(1+x)$. Integrate $\\frac{1}{1+x}=\\sum(-1)^n x^n$ from $0$ to $x$: $\\ln(1+x) = \\sum \\frac{(-1)^n x^{n+1}}{n+1}$ for $|x| \\leq 1$ ($x \\neq -1$).",ptype:"manip"},
{n:"4",text:"Find a power series representation for $\\arctan(x)$. Integrate $\\frac{1}{1+x^2}=\\sum(-1)^n x^{2n}$ from $0$ to $x$: $\\arctan(x) = \\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$ for $|x| \\leq 1$.",ptype:"manip"},
{n:"5",text:"Find a power series representation for $\\frac{x}{1+x^2}$. Start from $\\frac{1}{1+x^2}=\\sum(-1)^n x^{2n}$, multiply by $x$: $\\frac{x}{1+x^2} = \\sum (-1)^n x^{2n+1}$ for $|x|<1$.",ptype:"manip"},
{n:"6",text:"Find a power series representation for $\\ln(1-x)$. Integrate $\\frac{-1}{1-x}=-\\sum x^n$: $\\ln(1-x) = -\\sum \\frac{x^{n+1}}{n+1} = -\\sum \\frac{x^n}{n}$ (starting $n=1$) for $|x|<1$.",ptype:"manip"},
{n:"7",text:"Find a power series representation for $\\frac{x^2}{1-x^3}$. Let $u=x^3$: $\\frac{1}{1-u}=\\sum u^n$, so $\\frac{1}{1-x^3}=\\sum x^{3n}$. Multiply by $x^2$: $\\frac{x^2}{1-x^3}=\\sum x^{3n+2}$ for $|x|<1$.",ptype:"manip"},
{n:"8",text:"Find a power series for $\\int_0^x \\frac{\\sin(t^2)}{t}\\,dt$ (the Fresnel integral). Write $\\sin(t^2)=\\sum \\frac{(-1)^n t^{4n+2}}{(2n+1)!}$, divide by $t$, integrate: $\\sum \\frac{(-1)^n x^{4n+2}}{(4n+2)(2n+1)!}$.",ptype:"manip"}
]},

{id:"10.12",name:"10.12 Taylor & Maclaurin Series",test:"t1",ptypes:[
{id:"maclaurin",name:"Maclaurin series (centred at 0)"},
{id:"taylor",name:"Taylor series at x = a"},
{id:"buildnew",name:"Build series via substitution into known series"}
],questions:[
{n:"1",text:"Find the Maclaurin series for $f(x)=e^x$. Compute all derivatives: $f^{(n)}(0)=1$. Series: $\\sum \\frac{x^n}{n!}$. Radius of convergence: $R=\\infty$.",ptype:"maclaurin"},
{n:"2",text:"Find the Maclaurin series for $f(x)=\\sin x$. Derivatives cycle: $\\sin, \\cos, -\\sin, -\\cos, \\ldots$ $f^{(n)}(0) = 0,1,0,-1,\\ldots$ Series: $\\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$. $R=\\infty$.",ptype:"maclaurin"},
{n:"3",text:"Find the Maclaurin series for $f(x)=\\cos x$. Similar to $\\sin x$: Series: $\\sum \\frac{(-1)^n x^{2n}}{(2n)!}$. $R=\\infty$.",ptype:"maclaurin"},
{n:"4",text:"Find the Maclaurin series for $f(x)=\\ln(1+x)$. $f'(x)=\\frac{1}{1+x}$, successive derivatives give $\\frac{(-1)^{n-1}(n-1)!}{(1+x)^n}$. At $x=0$: $f^{(n)}(0)=(-1)^{n-1}(n-1)!$. Series: $\\sum \\frac{(-1)^{n-1} x^n}{n}$. $R=1$.",ptype:"maclaurin"},
{n:"5",text:"Find the Maclaurin series for $f(x)=\\frac{1}{1-x}$. $f^{(n)}(x)=\\frac{n!}{(1-x)^{n+1}}$, $f^{(n)}(0)=n!$. Series: $\\sum x^n$. $R=1$.",ptype:"maclaurin"},
{n:"6",text:"Find the Maclaurin series for $f(x)=\\arctan(x)$. $f'(x)=\\frac{1}{1+x^2}=\\sum(-1)^n x^{2n}$. Integrate: $\\arctan(x)=\\sum \\frac{(-1)^n x^{2n+1}}{2n+1}$. $R=1$.",ptype:"maclaurin"},
{n:"7",text:"Find the Maclaurin series for $f(x)=(1+x)^k$ for non-integer $k$ (binomial series). $f^{(n)}(0)=k(k-1)\\cdots(k-n+1)$. Series: $\\sum C(k,n)x^n$ where $C(k,n)=\\frac{k(k-1)\\cdots(k-n+1)}{n!}$. $R=1$.",ptype:"maclaurin"},
{n:"8",text:"Find the Taylor series for $f(x)=e^x$ centred at $x=1$. $f^{(n)}(x)=e^x$, so $f^{(n)}(1)=e$. Series: $\\sum \\frac{e(x-1)^n}{n!} = e \\sum \\frac{(x-1)^n}{n!}$. $R=\\infty$.",ptype:"taylor"},
{n:"9",text:"Find the Taylor series for $f(x)=\\sin x$ centred at $x=\\pi/4$. Compute $f(\\pi/4)=1/\\sqrt{2}$, $f'(\\pi/4)=1/\\sqrt{2}$, $f''(\\pi/4)=-1/\\sqrt{2}$, $\\ldots$ Pattern repeats with period 4. Write the series.",ptype:"taylor"},
{n:"10",text:"Find the Taylor series for $f(x)=\\ln(x)$ centred at $x=1$. $f(1)=0$, $f'(1)=1$, $f''(1)=-1$, $f'''(1)=2$, $f^{(n)}(1)=(-1)^{n-1}(n-1)!$. Series: $\\sum \\frac{(-1)^{n-1}(x-1)^n}{n}$. $R=1$.",ptype:"taylor"},
{n:"11",text:"Find the Taylor series for $f(x)=1/x$ centred at $x=1$. $f^{(n)}(x)=\\frac{(-1)^n n!}{x^{n+1}}$, $f^{(n)}(1)=(-1)^n n!$. Series: $\\sum (-1)^n(x-1)^n$. $R=1$.",ptype:"taylor"},
{n:"12",text:"Find the Taylor series for $f(x)=\\sqrt{x}$ centred at $x=4$. $f(4)=2$, $f'(4)=1/4$, $f''(4)=-1/64$, $\\ldots$ Series: $2 + \\frac{1}{4}(x-4) - \\frac{1}{64}\\cdot\\frac{(x-4)^2}{2!} + \\ldots$ This is a binomial series in disguise.",ptype:"taylor"},
{n:"13",text:"Use substitution to find the Maclaurin series for $e^{x^2}$. In $e^x=\\sum x^n/n!$ replace $x$ with $x^2$: $e^{x^2}=\\sum \\frac{x^{2n}}{n!}$. $R=\\infty$.",ptype:"buildnew"},
{n:"14",text:"Use substitution to find the Maclaurin series for $\\sin(x^2)$. In $\\sin x=\\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ replace $x$ with $x^2$: $\\sin(x^2)=\\sum \\frac{(-1)^n x^{4n+2}}{(2n+1)!}$. $R=\\infty$.",ptype:"buildnew"},
{n:"15",text:"Use substitution to find the Maclaurin series for $\\cos(x^3)$. In $\\cos x=\\sum \\frac{(-1)^n x^{2n}}{(2n)!}$ replace $x$ with $x^3$: $\\cos(x^3)=\\sum \\frac{(-1)^n x^{6n}}{(2n)!}$. $R=\\infty$.",ptype:"buildnew"},
{n:"16",text:"Use substitution to find the Maclaurin series for $\\frac{1}{1+x^2}$. In $\\frac{1}{1-x}=\\sum x^n$ replace $x$ with $-x^2$: $\\frac{1}{1+x^2}=\\sum (-1)^n x^{2n}$. $R=1$.",ptype:"buildnew"},
{n:"17",text:"Use multiplication to find the first four terms of the Maclaurin series for $e^x \\cdot \\sin x$. Write out $e^x=1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}+\\ldots$ and $\\sin x=x-\\frac{x^3}{3!}+\\ldots$ Multiply term-by-term and collect powers.",ptype:"buildnew"},
{n:"18",text:"Use substitution to find the Maclaurin series for $x \\cdot \\cos(2x)$. In $\\cos x=\\sum \\frac{(-1)^n x^{2n}}{(2n)!}$ replace $x$ with $2x$: $\\cos(2x)=\\sum \\frac{(-1)^n (2x)^{2n}}{(2n)!}=\\sum \\frac{(-1)^n 4^n x^{2n}}{(2n)!}$. Multiply by $x$.",ptype:"buildnew"},
{n:"19",text:"Find the Maclaurin series for $\\sinh(x) = (e^x-e^{-x})/2$. Subtract the series for $e^{-x}$ from $e^x$ and divide by 2: $\\sinh(x)=\\sum \\frac{x^{2n+1}}{(2n+1)!}$. $R=\\infty$.",ptype:"buildnew"},
{n:"20",text:"Find the Maclaurin series for $\\cosh(x) = (e^x+e^{-x})/2$. Add the series for $e^x$ and $e^{-x}$ and divide by 2: $\\cosh(x)=\\sum \\frac{x^{2n}}{(2n)!}$. $R=\\infty$.",ptype:"buildnew"}
]},

{id:"10.13",name:"10.13 Remainder / Error (pp. 683–685)",test:"t1",ptypes:[
{id:"lagrange",name:"Lagrange Remainder Theorem"}
],questions:[
{n:"1",text:"Use the Lagrange Remainder to bound the error when approximating $e$ by the $n$th Taylor polynomial of $e^x$ at $x=1$. $|R_n(1)| \\leq M \\cdot \\frac{1^{n+1}}{(n+1)!}$ where $M=e<3$. Find the smallest $n$ so that $\\frac{3}{(n+1)!} < 0.001$.",ptype:"lagrange"},
{n:"2",text:"How many terms of the Maclaurin series for $\\sin x$ are needed to approximate $\\sin(0.5)$ with error less than $0.0001$? Use $|R_n| \\leq \\frac{(0.5)^{n+1}}{(n+1)!}$. Try successive values of $n$ until bound $< 0.0001$.",ptype:"lagrange"},
{n:"3",text:"Approximate $\\cos(0.2)$ using a Taylor polynomial and bound the error using the Lagrange Remainder. $|\\cos^{(n+1)}(t)| \\leq 1$ for all $t$, so $|R_n| \\leq \\frac{(0.2)^{n+1}}{(n+1)!}$. Find $n$ so error $< 0.00001$.",ptype:"lagrange"},
{n:"4",text:"The Lagrange form of the remainder for a Taylor polynomial of degree $n$ centred at $a$ is $R_n(x) = \\frac{f^{(n+1)}(c)(x-a)^{n+1}}{(n+1)!}$ for some $c$ between $a$ and $x$. Use this to show that the Maclaurin series for $e^x$ converges to $e^x$ for all $x$ by showing $|R_n(x)| \\to 0$.",ptype:"lagrange"},
{n:"5",text:"Show that the Maclaurin series for $\\sin x$ converges to $\\sin x$ for all $x$. $|R_n(x)| \\leq \\frac{|x|^{n+1}}{(n+1)!} \\to 0$ for all $x$ since $\\frac{|x|^{n+1}}{(n+1)!}$ is a term of the convergent series for $e^{|x|}$.",ptype:"lagrange"},
{n:"6",text:"Approximate $\\sqrt{1.1}$ using a 2nd degree Taylor polynomial centred at $x=1$ for $f(x)=\\sqrt{x}$. Then use the Lagrange Remainder to bound the error. $f'''(x)=\\frac{3}{8x^{5/2}}$; on $[1,1.1]$, $|f'''(c)| \\leq 3/8$. $|R_2| \\leq \\frac{3}{8} \\cdot \\frac{(0.1)^3}{6}$.",ptype:"lagrange"},
{n:"7",text:"Use the Taylor polynomial of degree 4 for $\\cos x$ to approximate $\\cos(\\pi/3)$ and bound the error. Compare with exact value. Show $|R_4| \\leq \\frac{(\\pi/3)^5}{5!} \\approx 0.0004$.",ptype:"lagrange"}
]}

]},

{id:"t2",name:"Test 2",date:"Mar 3",color:"#1D9E75",sections:[
{id:"10.3",name:"10.3 Taylor Polynomials & Remainders",test:"t2",ptypes:[
{id:"tpoly",name:"Construct nth-degree Taylor polynomial"},
{id:"terror",name:"Bound the error / remainder"}
],questions:[
{n:"1–15",text:"Find the degree-$n$ Taylor polynomial $P_n(x)$ for $f(x)$ centred at $x = a$. Compute $f(a), f'(a), \\ldots, f^{(n)}(a)$. Write $P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$. Simplify all coefficients.",ptype:"tpoly"},
{n:"Error bound",text:"Find $M = \\max|f^{(n+1)}(t)|$ on the interval between $a$ and $x$. Then $|R_n(x)| \\leq \\frac{M|x-a|^{n+1}}{(n+1)!}$. For 'how many terms for accuracy $\\varepsilon$': solve $\\frac{M|x-a|^{n+1}}{(n+1)!} < \\varepsilon$ by trying $n = 1, 2, 3, \\ldots$ since no closed-form solution usually exists.",ptype:"terror"}
]},
{id:"10.5",name:"10.5 Taylor Series Expansions",test:"t2",ptypes:[
{id:"subst",name:"Expand via substitution into known series"},
{id:"multdiv",name:"Multiply two series term-by-term"}
],questions:[
{n:"1–7",text:"Find the Maclaurin series by substituting into a known series: $e^x = \\sum x^n/n!$, $\\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$, $\\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$, $\\frac{1}{1-x} = \\sum x^n$, $(1+x)^k$ for binomial. Example: $e^{x^2}$ → replace $x$ with $x^2$ → $\\sum x^{2n}/n!$. Scale the interval of convergence.",ptype:"subst"},
{n:"10–35",text:"Find Maclaurin series using substitution, multiplication, or integration of known series. NEVER differentiate from scratch — identify the base series first then transform it. For products like $x \\cdot \\sin(x^2)$: write out $\\sin(x^2)$ by substituting $x^2$ into $\\sin$'s series, then multiply every term by $x$.",ptype:"subst"},
{n:"47–48",text:"Multiply two power series term-by-term: write both series out to sufficient degree (enough to get the required terms), multiply and collect powers of $x$. The result is the Cauchy product.",ptype:"multdiv"}
]},
{id:"10.7",name:"10.7 Applications of Taylor Series",test:"t2",ptypes:[
{id:"approxint",name:"Approximate a definite integral via series"},
{id:"serieslim",name:"Compute a limit using series"},
{id:"approxval",name:"Approximate a function value to n decimal places"}
],questions:[
{n:"1–30",text:"Three question types in this section: (1) INTEGRALS — replace integrand with its Taylor series, integrate term-by-term, evaluate at bounds to get an alternating series, then sum until the first omitted term $< \\varepsilon$. (2) LIMITS — substitute the Taylor series for each function, cancel algebraically, read off the limit without L'Hôpital. (3) APPROXIMATION — use the Taylor polynomial + Lagrange remainder to find how many terms give $n$ decimal places of accuracy.",ptype:"approxint"}
]},
{id:"15.1",name:"15.1 Introduction to DEs",test:"t2",ptypes:[
{id:"verify",name:"Verify a solution / find particular solution with ICs"},
{id:"immint",name:"Immediately integrable DEs"},
{id:"classify",name:"Identify order, linearity, and singular solutions"}
],questions:[
{n:"1",text:"Verify $y(x) = 2 + Ce^{-x^2}$ satisfies $\\frac{dy}{dx} + 2xy = 4x$.",ptype:"verify"},
{n:"2",text:"Verify $y(x) = \\frac{x}{1+Cx}$ satisfies $\\frac{dy}{dx} = \\frac{y^2}{x^2}$.",ptype:"verify"},
{n:"3",text:"Verify $y(x) = \\frac{x^3}{2} + Cx^3 e^{1/x^2}$ satisfies $x^3 \\frac{dy}{dx} + (2-3x^2)y = x^3$.",ptype:"verify"},
{n:"4",text:"Verify $y(x) = C_1 \\sin 3x + C_2 \\cos 3x$ satisfies $\\frac{d^2y}{dx^2} + 9y = 0$.",ptype:"verify"},
{n:"5",text:"Verify $y(x) = C_1^2 e^{2x} + \\frac{1}{2}C_1 e^x + C_2$ satisfies $\\left(\\frac{d^2y}{dx^2}\\right)^2 = 1 + \\left(\\frac{dy}{dx}\\right)^2$.",ptype:"verify"},
{n:"6",text:"Verify $y(x) = C_1 e^{2x}\\cos(x/\\sqrt{2}) + C_2 e^{2x}\\sin(x/\\sqrt{2})$ satisfies $2\\frac{d^2y}{dx^2} - 8\\frac{dy}{dx} + 9y = 0$.",ptype:"verify"},
{n:"7",text:"Verify $y(x) = C_1\\cos 2x + C_2\\sin 2x + C_3\\cos x + C_4\\sin x$ satisfies $\\frac{d^4y}{dx^4} + 5\\frac{d^2y}{dx^2} + 4y = 0$.",ptype:"verify"},
{n:"8",text:"Verify $y(x) = \\left(C_1 + C_2 x - \\frac{x^2}{4}\\right)e^{4x}$ satisfies $2\\frac{d^2y}{dx^2} - 16\\frac{dy}{dx} + 32y = -e^{4x}$.",ptype:"verify"},
{n:"9",text:"Verify $y(x) = C_1\\cos(2\\ln x) + C_2\\sin(2\\ln x) + \\frac{1}{4}$ satisfies $x^2\\frac{d^2y}{dx^2} + x\\frac{dy}{dx} + 4y = 1$.",ptype:"verify"},
{n:"10",text:"Verify $y(x) = \\frac{C_1 \\sin x}{\\sqrt{x}} + \\frac{C_2 \\cos x}{\\sqrt{x}}$ satisfies $x^2\\frac{d^2y}{dx^2} + x\\frac{dy}{dx} + \\left(x^2 - \\frac{1}{4}\\right)y = 0$.",ptype:"verify"},
{n:"11",text:"Find the particular solution of $y'' + 9y = 0$ satisfying $y(0) = 1$, $y'(0) = 6$.",ptype:"verify"},
{n:"12",text:"Find the particular solution of $y'' + 9y = 0$ satisfying $y(0) = 2$, $y(\\pi/2) = 3$.",ptype:"verify"},
{n:"13",text:"Find the particular solution of $y'' + 9y = 0$ satisfying $y(\\pi/12) = 0$, $y'(\\pi/12) = 1$.",ptype:"verify"},
{n:"14",text:"Find the particular solution of $y'' + 9y = 0$ satisfying $y(1) = 1$, $y(2) = 2$.",ptype:"verify"},
{n:"15",text:"Find the general solution of $\\frac{dy}{dx} = 6x^2 + 2x$ by direct integration.",ptype:"immint"},
{n:"16",text:"Find the general solution of $\\frac{dy}{dx} = \\frac{1}{9 + x^2}$ by direct integration.",ptype:"immint"},
{n:"17",text:"Find the general solution of $\\frac{d^2y}{dx^2} = 2x + e^x$ by direct integration.",ptype:"immint"},
{n:"18",text:"Find the general solution of $\\frac{d^2y}{dx^2} = x \\ln x$ by direct integration.",ptype:"immint"},
{n:"19",text:"Find the general solution of $\\frac{d^3y}{dx^3} = 13x^5$ by direct integration.",ptype:"immint"},
{n:"21",text:"Show $y(x) = -(x^2+C)^{-1}$ is a one-parameter family of solutions of $\\frac{dy}{dx} = 2xy^2$. Find a singular solution.",ptype:"classify"},
{n:"22",text:"Show $y(x) = 1 - (x^3+C)^{-1}$ is a one-parameter family of solutions of $\\frac{dy}{dx} = 3x^2(y-1)^2$. Find a singular solution.",ptype:"classify"}
]},
{id:"15.2",name:"15.2 Separable Differential Equations",test:"t2",ptypes:[
{id:"sep-gen",name:"General solution — one-parameter family"},
{id:"sep-ivp",name:"IVP — particular solution with initial condition"},
{id:"sep-app",name:"Applied word problems"}
],questions:[
{n:"1",text:"Find the one-parameter family of solutions and identify any singular solutions: $y^2\\,dx - x^2\\,dy = 0$.",ptype:"sep-gen"},
{n:"2",text:"Find the one-parameter family of solutions and identify any singular solutions: $\\frac{dy}{dx} + 2xy = 4x$. [Hint: separable after rearranging as $\\frac{dy}{dx} = 2x(2-y)$.]",ptype:"sep-gen"},
{n:"3",text:"Find the one-parameter family of solutions and identify any singular solutions: $2xy\\,dx + (x^2+1)\\,dy = 0$.",ptype:"sep-gen"},
{n:"4",text:"Find the one-parameter family of solutions and identify any singular solutions: $\\frac{dy}{dx} = 3y + 2$.",ptype:"sep-gen"},
{n:"5",text:"Find the one-parameter family of solutions and identify any singular solutions: $3(y^2+2)\\,dx = 4y(x-1)\\,dy$.",ptype:"sep-gen"},
{n:"6",text:"Find the one-parameter family of solutions and identify any singular solutions: $(x^2 y + x^2)\\,dx + (xy^2 - y^2)\\,dy = 0$.",ptype:"sep-gen"},
{n:"7",text:"Find the one-parameter family of solutions and identify any singular solutions: $\\frac{dy}{dx} = -\\frac{\\cos y}{\\sin x}$.",ptype:"sep-gen"},
{n:"8",text:"Find the one-parameter family of solutions and identify any singular solutions: $(x^2 y e^x - y)\\,dx + xy^3\\,dy = 0$.",ptype:"sep-gen"},
{n:"9",text:"Find the one-parameter family of solutions and identify any singular solutions: $(x^2 y^2 \\sec x \\tan x + xy^2 \\sec x)\\,dx + xy^3\\,dy = 0$.",ptype:"sep-gen"},
{n:"10",text:"Find the one-parameter family of solutions and identify any singular solutions: $\\frac{dy}{dx} = \\frac{1+y^2}{1+x^2}$.",ptype:"sep-gen"},
{n:"11",text:"Find the particular solution satisfying the initial condition: $2y\\,dx + (x+1)\\,dy = 0$, $y(1) = 2$.",ptype:"sep-ivp"},
{n:"12",text:"Find the particular solution satisfying the initial condition: $(xy+y)\\,dx - (xy-x)\\,dy = 0$, $y(1) = 2$.",ptype:"sep-ivp"},
{n:"13",text:"Find the particular solution satisfying the initial condition: $\\frac{dy}{dx} = e^{x+y}$, $y(0) = 0$.",ptype:"sep-ivp"},
{n:"14",text:"Find the particular solution satisfying the initial condition: $\\frac{dy}{dx} = 2x(1+y^2)$, $y(2) = 4$.",ptype:"sep-ivp"},
{n:"15",text:"Find the particular solution satisfying the initial condition: $\\frac{dy}{dx} = \\frac{\\sin^2 y}{\\cos^2 x}$, $y(0) = \\pi/2$.",ptype:"sep-ivp"},
{n:"16",text:"A girl lives 6 km from school. Her speed is always proportional to the square of her distance from school. (a) Find her distance from school at any time. (b) When does she reach school?",ptype:"sep-app"},
{n:"17",text:"Find a one-parameter family of solutions for $\\frac{dy}{dx} = -\\frac{1+y^3}{xy^2+x^3 y^2}$.",ptype:"sep-app"},
{n:"18",text:"Water at 80°C placed in a room at 20°C cools to 60°C in 2 min. Using Newton's law of cooling, find a formula for its temperature as a function of time.",ptype:"sep-app"},
{n:"19",text:"A thermometer reading 23°C is taken outside where temperature is $-20$°C. The reading drops to 0°C in 4 min. When will it read $-19$°C?",ptype:"sep-app"},
{n:"20",text:"A drug is used up at a rate proportional to the amount present. If a dose decreases by 5% in the first hour, when does it decrease to one-half its original amount?",ptype:"sep-app"},
{n:"21",text:"Show that $N = N_0 e^{-kt} + \\bar{N}(1-e^{-kt})$ solves $\\frac{dN}{dt} = k(\\bar{N}-N)$, where $N_0$ is the initial nitrogen level in a deep-sea diver's tissues.",ptype:"sep-app"},
{n:"22",text:"Glucose is administered IV at constant rate $R$ and used by the body at a rate proportional to the amount $A_0$ present. Find a formula for the amount in the bloodstream at any time.",ptype:"sep-app"},
{n:"23",text:"Find equations for all curves where the normal at any point and the line joining that point to the origin form an isosceles triangle with the $x$-axis as base.",ptype:"sep-app"},
{n:"24",text:"Substances A and B react: 1g A + 1g B → 2g C, at a rate proportional to the product of amounts of A and B. Initial amounts: 10g A and 15g B. Find a formula for the amount of C at any time.",ptype:"sep-app"},
{n:"25",text:"Repeat Exercise 24 when the initial amounts of A and B are both 10g.",ptype:"sep-app"},
{n:"26",text:"Two spherical containers of radius $R$ connected by a pipe of area $a$. Flow rate $= \\frac{a}{3}\\sqrt{2gh}$. One container initially empty, the other full. How long until the water levels are equal?",ptype:"sep-app"},
{n:"27",text:"A cylindrical tank (radius $R$, length $L$) with hemispherical ends, axis horizontal. Water exits at rate $0.6a\\sqrt{2gh}$. Find the time for the full tank to empty.",ptype:"sep-app"},
{n:"28",text:"A canal lock 8m by 16m. Water enters at $Q = 0.04\\sqrt{2gh}$ m³/s. Initial $h = 2$m; gate opens when $h = 2$cm. How long until the gate opens?",ptype:"sep-app"},
{n:"29",text:"A cubical container 1m on each side with a slit 20cm high and 1mm wide at the top. How long does the water level take to fall 10cm? Use discharge coefficient $c = 0.6$.",ptype:"sep-app"},
{n:"30",text:"A pipe of length $L$ connected to a reservoir of depth $h$. The velocity $v$ satisfies $gh = v^2/2 + L(dv/dt)$. Find $v$ as a function of $t$.",ptype:"sep-app"},
{n:"31",text:"Third-order chemical reactor: $\\frac{dx}{dt} = k(a-x)(b-x)(c-x)$. Solve for cases: (a) $a=b=c$, (b) $a=b \\neq c$, (c) $a \\neq b \\neq c$.",ptype:"sep-app"},
{n:"32",text:"Mach number $M$ and cross-section $A$ related by $\\frac{dA}{dM} = \\frac{A(M^2-1)}{M\\left(\\frac{k-1}{2}M^2+1\\right)}$. Find $A$ in terms of $M$ if $A=A_0$ when $M=1$.",ptype:"sep-app"},
{n:"33",text:"Transient free-surface flow: $\\frac{dv}{dt} = \\frac{K}{n}\\left(v + \\frac{H(t)}{v}\\right)$. Solve when (a) $H(t)$ is constant, (b) $H(t) = qt - nv$.",ptype:"sep-app"},
{n:"50",text:"Logistic model: $\\frac{dN}{dt} = kN\\left(1-\\frac{N}{C}\\right)$. Solve for $N(t)$ when $k=1$, $C=10^6$, $N(0)=100$.",ptype:"sep-app"}
]},
{id:"15.3",name:"15.3 Linear First-Order DEs",test:"t2",ptypes:[
{id:"lin-gen",name:"General solution — integrating factor method"},
{id:"lin-ivp",name:"IVP — particular solution"},
{id:"lin-app",name:"Applied problems (circuits, mixing, cooling)"}
],questions:[
{n:"1",text:"Find the general solution: $\\frac{dy}{dx} + 2xy = 4x$.",ptype:"lin-gen"},
{n:"2",text:"Find the general solution: $\\frac{dy}{dx} + \\frac{2}{x}y = 6x^3$.",ptype:"lin-gen"},
{n:"3",text:"Find the general solution: $(2y-x)\\,dx + dy = 0$.",ptype:"lin-gen"},
{n:"4",text:"Find the general solution: $\\frac{dy}{dx} + y\\cot x = 5e^{\\cos x}$.",ptype:"lin-gen"},
{n:"5",text:"Find the general solution: $(x^2+2xy)\\,dx + (x^2+1)\\,dy = 0$.",ptype:"lin-gen"},
{n:"6",text:"Find the general solution: $(x+1)\\frac{dy}{dx} - 2y = 2(x+1)$.",ptype:"lin-gen"},
{n:"7",text:"Find the general solution: $\\frac{1}{x}\\frac{dy}{dx} - \\frac{y}{x^2} = \\frac{1}{x^3}$.",ptype:"lin-gen"},
{n:"8",text:"Find the general solution: $(y+e^{2x})\\,dx = dy$.",ptype:"lin-gen"},
{n:"9",text:"Find the general solution: $\\frac{dy}{dx} + y = 2\\cos x$.",ptype:"lin-gen"},
{n:"10",text:"Find the general solution: $x^3\\frac{dy}{dx} + (2-3x^2)y = x^3$.",ptype:"lin-gen"},
{n:"11",text:"Find the general solution: $\\frac{dy}{dx} + \\frac{y}{x\\ln x} = x^2$.",ptype:"lin-gen"},
{n:"12",text:"Find the general solution: $(-2y\\cot 2x - 1 + 2x\\cot 2x + 2\\csc 2x)\\,dx + dy = 0$.",ptype:"lin-gen"},
{n:"13",text:"Solve the IVP: $\\frac{dy}{dx} + 3x^2 y = x^2$, $y(1) = 2$.",ptype:"lin-ivp"},
{n:"14",text:"Solve the IVP: $(-e^x \\sin x + y)\\,dx + dy = 0$, $y(0) = -1$.",ptype:"lin-ivp"},
{n:"15",text:"Solve the IVP: $\\frac{dy}{dx} + \\frac{x^3 y}{x^4+1} = x^7$, $y(0) = 1$.",ptype:"lin-ivp"},
{n:"16",text:"Find a general solution for $(y^3-x)\\,dy = y\\,dx$.",ptype:"lin-gen"},
{n:"18",text:"Bernoulli equation — use substitution $z = y^{1-n}$: $\\frac{dy}{dx} + y = y^2 e^x$.",ptype:"lin-gen"},
{n:"19",text:"Bernoulli equation — use substitution $z = y^{1-n}$: $\\frac{dy}{dx} + \\frac{y}{x} = y^2 x^2$.",ptype:"lin-gen"},
{n:"20",text:"Bernoulli equation — use substitution $z = y^{1-n}$: $\\frac{dy}{dx} - y + (x^2+2x)y^2 = 0$.",ptype:"lin-gen"},
{n:"21",text:"Bernoulli equation — use substitution $z = y^{1-n}$: $x\\,dy + y\\,dx = x^3 y^5\\,dx$.",ptype:"lin-gen"},
{n:"22",text:"Bernoulli equation — use substitution $z = y^{1-n}$: $\\frac{dy}{dx} + y\\tan x = y^4 \\sin x$.",ptype:"lin-gen"},
{n:"23",text:"Repeat Exercise 22 of §15.2 if glucose is added at a rate $R(t)$ that is a function of time.",ptype:"lin-app"},
{n:"24",text:"A tank has 100L of solution with 4kg of sugar. A mixture with 10g sugar/L is added at 200mL/min; 100mL of well-stirred mixture is removed each minute. Find the amount of sugar as a function of time.",ptype:"lin-app"},
{n:"25",text:"Repeat Exercise 24 if 300mL of mixture is removed each minute.",ptype:"lin-app"},
{n:"26",text:"A tank contains 1000L of water and 5kg of salt. A mixture of 2kg salt per 100L is added at 10mL/s; well-stirred mixture is removed at 5mL/s. Find the amount of salt as a function of time. Draw a graph.",ptype:"lin-app"},
{n:"27",text:"Repeat Exercise 26 if mixture is removed at 10mL/s. What is the limit of salt for long periods?",ptype:"lin-app"},
{n:"28",text:"Repeat Exercise 26 if mixture is removed at 20mL/s.",ptype:"lin-app"},
{n:"29",text:"A room of 100m³ initially contains 0.1% CO₂. Fresh air (0.05% CO₂) flows in at 5m³/min; well-mixed air flows out at the same rate. Find CO₂ as a function of time. What is the limit as $t \\to \\infty$?",ptype:"lin-app"},
{n:"30",text:"A potato at 20°C is placed in an oven set to 200°C; the oven takes 5min to reach 200°C at a constant rate and stays at 200°C after. Find the potato temperature as a function of time using Newton's law of cooling.",ptype:"lin-app"},
{n:"31",text:"Water at 10°C enters a tank at 0.03kg/s. At $t=0$ the tank reaches capacity (100kg) and a heater turns on at 2000J/s. Find the temperature of the water as a function of time.",ptype:"lin-app"},
{n:"32",text:"Repeat Exercise 31 if the rate water enters is $\\frac{100}{t+1}$ kg/s.",ptype:"lin-app"},
{n:"33",text:"Repeat Exercise 31 if the heater supplies $q=20t$ J/s for the first 10 min. Solve for $0 \\leq t \\leq 600$.",ptype:"lin-app"},
{n:"34",text:"Repeat Exercise 31 if the incoming water temperature is $T_0(t) = 10e^{-t}$.",ptype:"lin-app"},
{n:"35",text:"RC-circuit step response: $RC\\frac{dV}{dt} + V = h(t)$, $V(0)=0$. Find $V(t)$ and sketch the graph.",ptype:"lin-app"},
{n:"36",text:"RL-circuit pulse response: $\\frac{L}{R}\\frac{di}{dt} + i = I = h(t)-h(t-1)$, $i(0)=0$. Find $i(t)$ and sketch.",ptype:"lin-app"},
{n:"37",text:"(a) LR-circuit with $E(t)=E_0\\sin(\\omega t)$: solve $L\\frac{dI}{dt} + RI = E$ for $I(t)$ and show it can be written as $Ae^{-Rt/L} + \\frac{E_0}{Z}\\sin(\\omega t-\\varphi)$ where $Z=\\sqrt{R^2+\\omega^2 L^2}$, $\\varphi=\\arctan(\\omega L/R)$. (b) Find $A$ when $I(0)=I_0$.",ptype:"lin-app"},
{n:"38",text:"(a) RC-circuit with $E(t)=E_0\\sin(\\omega t)$: show $I(t) = Ae^{-t/(RC)} + \\frac{E_0}{Z}\\sin(\\omega t-\\varphi)$ where $Z=\\sqrt{R^2+\\frac{1}{\\omega^2 C^2}}$, $\\varphi=\\arctan\\left(\\frac{-1}{\\omega CR}\\right)$. (b) Find $A$ when $I(0)=I_0$.",ptype:"lin-app"}
]},
{id:"15.4",name:"15.4 Second-Order Reducible to Two First-Order",test:"t2",ptypes:[
{id:"depvar",name:"Dependent variable missing: substitute v = y'"},
{id:"indvar",name:"Independent variable missing: substitute y'' = v dv/dy"}
],questions:[
{n:"1",text:"Find the general solution (dependent variable $y$ missing, substitute $v=y'$): $xy'' + y' = 4x$.",ptype:"depvar"},
{n:"3",text:"Find the general solution (dependent variable $y$ missing, substitute $v=y'$): $y'' = y' + 2x$.",ptype:"depvar"},
{n:"4",text:"Find the general solution (dependent variable $y$ missing, substitute $v=y'$): $x^2 y'' = (y')^2$.",ptype:"depvar"},
{n:"5",text:"Find the general solution (dependent variable $y$ missing, substitute $v=y'$): $y''\\sin x + y'\\cos x = \\sin x$.",ptype:"depvar"},
{n:"2",text:"Find the general solution (independent variable $x$ missing, use $y''=v\\,dv/dy$): $2yy'' = 1 + (y')^2$.",ptype:"indvar"},
{n:"7",text:"Find the general solution (independent variable $x$ missing, use $y''=v\\,dv/dy$): $y'' + 4y = 0$.",ptype:"indvar"},
{n:"8",text:"Find the general solution (independent variable $x$ missing, use $y''=v\\,dv/dy$): $y'' = yy'$.",ptype:"indvar"},
{n:"9",text:"Find the general solution (independent variable $x$ missing, use $y''=v\\,dv/dy$): $y'' + (y')^2 = 1$.",ptype:"indvar"},
{n:"10",text:"Find the general solution (independent variable $x$ missing, use $y''=v\\,dv/dy$): $(y'')^2 = 1 + (y')^2$.",ptype:"indvar"},
{n:"11",text:"A cylindrical cable: insulation temperature satisfies $r\\frac{d^2T}{dr^2} + \\frac{dT}{dr} = 0$. Find $T(r)$ if $T(a)=T_a$ and $T(b)=T_b$.",ptype:"depvar"},
{n:"12",text:"Repeat Exercise 11 with heat generation: $r\\frac{d^2T}{dr^2} + \\frac{dT}{dr} = k$. Find $T(r)$.",ptype:"depvar"},
{n:"13",text:"A well penetrates an aquifer: $r\\frac{d^2h}{dr^2} + \\frac{dh}{dr} = 0$. Find $h(r)$ given $h(r_w)=h_w$ and $h(r_i)=h_i$.",ptype:"depvar"},
{n:"14",text:"A dog at $(L,0)$ spots a rabbit at the origin running in the $+y$ direction at the same speed. Find the path of the dog (pursuit curve).",ptype:"indvar"},
{n:"15",text:"Repeat Exercise 14 if the dog runs twice as fast as the rabbit.",ptype:"indvar"},
{n:"16",text:"A hawk at $(L,0)$ pursues a pigeon at the origin flying at speed $v$ in the $+y$ direction; hawk speed $V>v$. (a) Show $y(x)$ satisfies the integrodifferential equation. (b) Differentiate to get $x y'' = (v/V)\\sqrt{1+(y')^2}$. (c) Solve for the pursuit curve. (d) Show the hawk catches the pigeon at distance $\\frac{vVL}{V^2-v^2}$ up the $y$-axis.",ptype:"indvar"}
]}
]},

{id:"t3",name:"Test 3",date:"Mar 24",color:"#D85A30",sections:[
{id:"15.6",name:"15.6 Linear DEs — Theory",test:"t3",ptypes:[
{id:"linop",name:"Linear vs. nonlinear; operator notation"},
{id:"lintest",name:"Wronskian & linear independence"}
],questions:[
{n:"1",text:"Prove or disprove that operator $L$ is linear: $L$ multiplies functions $y(x)$ by $5$.",ptype:"linop",solution:"$L(y_1+y_2) = 5(y_1+y_2) = 5y_1+5y_2 = Ly_1+Ly_2$ ✓\n$L(cy_1) = 5(cy_1) = c(5y_1) = cLy_1$ ✓\n>>LINEAR<<"},
{n:"2",text:"Prove or disprove that operator $L$ is linear: $L$ multiplies functions $y(x)$ by $15x$.",ptype:"linop",solution:"$L(y_1+y_2) = 15x(y_1+y_2) = 15xy_1+15xy_2 = Ly_1+Ly_2$ ✓\n$L(cy_1) = 15x(cy_1) = c(15xy_1) = cLy_1$ ✓\n>>LINEAR<<"},
{n:"3",text:"Prove or disprove that operator $L$ is linear: $L$ adds the fixed function $z(x)$ to functions $y(x)$.",ptype:"linop",solution:"$L(y_1+y_2) = y_1+y_2+z$, but $Ly_1+Ly_2 = (y_1+z)+(y_2+z) = y_1+y_2+2z \\neq y_1+y_2+z$.\nFails additivity.\n>>NOT LINEAR<<"},
{n:"4",text:"Prove or disprove that operator $L$ is linear: $L$ takes the limit of functions $y(x)$ as $x$ approaches $3$.",ptype:"linop",solution:"$\\lim(y_1+y_2) = \\lim y_1+\\lim y_2 = Ly_1+Ly_2$ ✓\n$\\lim(cy_1) = c \\cdot \\lim y_1 = cLy_1$ ✓\n>>LINEAR<<"},
{n:"5",text:"Prove or disprove that operator $L$ is linear: $L$ takes the limit of functions $y(x)$ as $x$ approaches infinity.",ptype:"linop",solution:"$\\lim(y_1+y_2) = \\lim y_1+\\lim y_2 = Ly_1+Ly_2$ ✓\n$\\lim(cy_1) = c \\cdot \\lim y_1 = cLy_1$ ✓\n>>LINEAR<<"},
{n:"6",text:"Prove or disprove that operator $L$ is linear: $L$ takes the first derivative of functions $y(x)$ with respect to $x$.",ptype:"linop",solution:"$(y_1+y_2)' = y_1'+y_2'$ ✓ (sum rule)\n$(cy_1)' = cy_1'$ ✓ (constant multiple rule)\n>>LINEAR<<"},
{n:"7",text:"Prove or disprove that operator $L$ is linear: $L$ takes the third derivative of functions $y(x)$ with respect to $x$.",ptype:"linop",solution:"Same argument as #6 applied three times: differentiation is always linear.\n>>LINEAR<<"},
{n:"8",text:"Prove or disprove that operator $L$ is linear: $L$ takes the antiderivative of functions $y(x)$ with respect to $x$.",ptype:"linop",solution:"$\\int(y_1+y_2)\\,dx = \\int y_1\\,dx+\\int y_2\\,dx = Ly_1+Ly_2$ ✓\n$\\int cy_1\\,dx = c\\int y_1\\,dx = cLy_1$ ✓\n>>LINEAR<<"},
{n:"9",text:"Prove or disprove that operator $L$ is linear: $L$ takes the definite integral of $y(x)$ from $-1$ to $4$.",ptype:"linop",solution:"$\\int_{-1}^{4}(y_1+y_2)\\,dx = \\int_{-1}^{4}y_1\\,dx+\\int_{-1}^{4}y_2\\,dx = Ly_1+Ly_2$ ✓\n$\\int_{-1}^{4}cy_1\\,dx = c\\int_{-1}^{4}y_1\\,dx = cLy_1$ ✓\n>>LINEAR<<"},
{n:"10",text:"Prove or disprove that operator $L$ is linear: $L$ takes the cube root of functions $y(x)$.",ptype:"linop",solution:"$L(y_1+y_2) = \\sqrt[3]{y_1+y_2} \\neq \\sqrt[3]{y_1}+\\sqrt[3]{y_2}$ in general.\nExample: $y_1=y_2=1 \\to L(1+1)=\\sqrt[3]{2}\\approx 1.26$, but $Ly_1+Ly_2=2$. Fails additivity.\n>>NOT LINEAR<<"},
{n:"11",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: $2x\\frac{d^2y}{dx^2} + x^3 y = x^2 + 5$.",ptype:"linop",solution:"No $y^2$ or products of $y$ terms.\nOperator form: >>$(2xD^2+x^3)y = x^2+5$<<"},
{n:"12",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: $2x\\frac{d^2y}{dx^2} + x^3 y = x^2 + 5y$.",ptype:"linop",solution:"Rearrange: $2xD^2 y+x^3 y-5y = x^2$.\nOperator form: >>$(2xD^2+x^3-5)y = x^2$<<"},
{n:"13",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: $2x\\frac{d^2y}{dx^2} + x^3 y = x^2 + 5y^2$.",ptype:"linop",solution:"Contains $y^2$ term: $5(y_1+y_2)^2 = 5y_1^2+10y_1 y_2+5y_2^2 \\neq 5y_1^2+5y_2^2$.\nCross term $10y_1 y_2$ shows nonlinearity.\n>>NONLINEAR<<"},
{n:"14",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: $x\\frac{d^3y}{dx^3} + 3x\\frac{d^2y}{dx^2} - 2\\frac{dy}{dx} + y = 10\\sin x$.",ptype:"linop",solution:"All derivatives appear to first power, no products.\nOperator form: >>$(xD^3+3xD^2-2D+1)y = 10\\sin x$<<"},
{n:"15",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: $x\\frac{d^3y}{dx^3} + 3x\\frac{d^2y}{dx^2} - 2\\frac{dy}{dx} + y^2 = 10\\sin x$.",ptype:"linop",solution:"Contains $y^2$ term — same argument as #13.\n>>NONLINEAR<<"},
{n:"16",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: $y\\frac{d^3y}{dx^3} + 3x\\frac{d^2y}{dx^2} - 2\\frac{dy}{dx} + y = 10\\sin x$.",ptype:"linop",solution:"The term $y \\cdot \\frac{d^3y}{dx^3}$ is a product of $y$ with its own derivative.\n>>NONLINEAR<<"},
{n:"17",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: $y'' - 3y' - 2y = 9\\sec^2 x$.",ptype:"linop",solution:"All $y$ terms to first power, no products.\nOperator form: >>$(D^2-3D-2)y = 9\\sec^2 x$<<"},
{n:"18",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: $yy'' + 3y' - 2y = e^x$.",ptype:"linop",solution:"Contains $yy''$ — product of $y$ with $y''$.\n>>NONLINEAR<<"},
{n:"19",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: $\\sqrt{1 + y' + x^2} = 4$.",ptype:"linop",solution:"$y'$ appears under a square root — cannot be written in linear form.\n>>NONLINEAR<<"},
{n:"20",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: $y'''' + y'' - y = \\ln x$.",ptype:"linop",solution:"All derivatives to first power, no products.\nOperator form: >>$(D^4+D^2-1)y = \\ln x$<<"},
{n:"21",text:"The Laplace transform is defined by $L(y) = \\int_0^{\\infty} e^{-st} y(t)\\,dt$. Show that $L$ is a linear operator on the set of all functions with a Laplace transform.",ptype:"linop",solution:"$L(y_1+y_2) = \\int_0^{\\infty} e^{-st}(y_1+y_2)\\,dt = \\int_0^{\\infty} e^{-st}y_1\\,dt+\\int_0^{\\infty} e^{-st}y_2\\,dt = Ly_1+Ly_2$ ✓\n$L(cy_1) = \\int_0^{\\infty} e^{-st}(cy_1)\\,dt = c\\int_0^{\\infty} e^{-st}y_1\\,dt = cLy_1$ ✓\n>>LINEAR<<"},
{n:"22",text:"The finite Fourier cosine transform is defined by $L(y) = \\int_0^{2\\pi} y(x)\\cos(nx)\\,dx$. Show that $L$ is a linear operator.",ptype:"linop",solution:"$L(y_1+y_2) = \\int_0^{2\\pi}(y_1+y_2)\\cos(nx)\\,dx = \\int_0^{2\\pi}y_1\\cos(nx)\\,dx+\\int_0^{2\\pi}y_2\\cos(nx)\\,dx = Ly_1+Ly_2$ ✓\n$L(cy_1) = \\int_0^{2\\pi}cy_1\\cos(nx)\\,dx = c\\int_0^{2\\pi}y_1\\cos(nx)\\,dx = cLy_1$ ✓\n>>LINEAR<<"},
{n:"11",text:"Use the Wronskian to test linear independence: $\\{1, x, x^2\\}$ on $-\\infty < x < \\infty$.",ptype:"lintest",solution:"$W(1,x,x^2) = \\det\\begin{vmatrix}1 & x & x^2 \\\\ 0 & 1 & 2x \\\\ 0 & 0 & 2\\end{vmatrix} = 2 \\neq 0$ for all $x$.\n>>LINEARLY INDEPENDENT<<"},
{n:"12",text:"Use the Wronskian to test linear independence: $\\{x, 2x-3x^2, x^2\\}$ on $-\\infty < x < \\infty$.",ptype:"lintest",solution:"$2x-3x^2 = 2(x)+(-3)(x^2)$ — $y_2$ is a linear combination of $y_1$ and $y_3$, so $W = 0$.\n>>LINEARLY DEPENDENT<<"},
{n:"13",text:"Use the Wronskian to test linear independence: $\\{\\sin x, \\cos x\\}$ on $0 \\leq x \\leq 2\\pi$.",ptype:"lintest",solution:"$W(\\sin x,\\cos x) = \\begin{vmatrix}\\sin x & \\cos x \\\\ \\cos x & -\\sin x\\end{vmatrix} = -\\sin^2 x-\\cos^2 x = -1 \\neq 0$.\n>>LINEARLY INDEPENDENT<<"},
{n:"14",text:"Use the Wronskian to test linear independence: $\\{x, xe^x, x^2e^x\\}$ on $0 \\leq x \\leq 1$.",ptype:"lintest",solution:"Compute $3\\times 3$ Wronskian determinant; after factoring out $xe^{2x}$: $W = xe^{2x} \\neq 0$ for $x\\in(0,1]$.\n>>LINEARLY INDEPENDENT<<"},
{n:"15",text:"Use the Wronskian to test linear independence: $\\{x\\sin x, e^{2x}\\}$ on $-\\infty < x < \\infty$.",ptype:"lintest",solution:"$W = \\begin{vmatrix}x\\sin x & e^{2x} \\\\ \\sin x+x\\cos x & 2e^{2x}\\end{vmatrix} = e^{2x}(2x\\sin x-\\sin x-x\\cos x)$.\nAt $x=\\pi$: $W = \\pi e^{2\\pi} \\neq 0$.\n>>LINEARLY INDEPENDENT<<"}
]},
{id:"15.7",name:"15.7 Homogeneous Linear DEs",test:"t3",ptypes:[
{id:"superpos",name:"Superposition — write general solution"},
{id:"reduct",name:"Wronskian verification problems"}
],questions:[
{n:"1",text:"Verify $y_1=e^{2x}$, $y_2=e^{-3x}$ satisfy $y''+y'-6y=0$. Confirm they are linearly independent. Write the general solution by superposition.",ptype:"superpos",solution:"Verify $y_1$: $4e^{2x}+2e^{2x}-6e^{2x} = 0$ ✓\nVerify $y_2$: $9e^{-3x}-3e^{-3x}-6e^{-3x} = 0$ ✓\nLinearly independent (different exponentials).\n>>$y = C_1 e^{2x}+C_2 e^{-3x}$<<"},
{n:"2",text:"Verify $y_1=\\cos x$ satisfies $y'+y\\tan x=0$. Since the DE is first-order linear, one linearly independent solution generates the general solution. Write the general solution.",ptype:"superpos",solution:"Verify $y_1$: $y_1'+y_1\\tan x = -\\sin x+\\cos x \\cdot (\\sin x/\\cos x) = -\\sin x+\\sin x = 0$ ✓\nFirst-order DE → one independent solution gives the general solution.\n>>$y = C_1\\cos x$<<"},
{n:"3",text:"Verify $y_1=\\cos 2x$, $y_2=\\sin 2x$, $y_3=\\cos x$, $y_4=\\sin x$ each satisfy $y''''+5y''+4y=0$. Confirm they are linearly independent. Write the general solution.",ptype:"superpos",solution:"Verify $\\cos 2x$: $(16-20+4)\\cos 2x = 0$ ✓\nVerify $\\sin 2x$: same ✓\nVerify $\\cos x$: $(1-5+4)\\cos x = 0$ ✓\nVerify $\\sin x$: same ✓\nAll four independent (different frequencies).\n>>$y = C_1\\cos 2x+C_2\\sin 2x+C_3\\cos x+C_4\\sin x$<<"},
{n:"4",text:"Verify $y_1=3e^{4x}$ and $y_2=-2xe^{4x}$ satisfy $2y''-16y'+32y=0$. Confirm they are linearly independent. Write the general solution.",ptype:"superpos",solution:"Verify $y_1=3e^{4x}$: $2(48)-16(12)+32(3) = 96-192+96 = 0$ ✓\nVerify $y_2=-2xe^{4x}$: $y_2'=-2e^{4x}-8xe^{4x}$, $y_2''=-16e^{4x}-32xe^{4x} \\to (-32-64x+32+128x-64x)e^{4x} = 0$ ✓\nIndependent ($y_2$ has $x$ factor).\n>>$y = (C_1+C_2 x)e^{4x}$<<"},
{n:"5",text:"Verify $y_1=10$, $y_2=3e^x$, $y_3=4e^{2x}$ satisfy $y'''-3y''+2y'=0$. Confirm they are linearly independent. Write the general solution.",ptype:"superpos",solution:"Verify $y_1=10$: $0-0+0 = 0$ ✓\nVerify $y_2=3e^x$: $(3-9+6)e^x = 0$ ✓\nVerify $y_3=4e^{2x}$: $32-48+16 = 0$ ✓\nAll independent (constant, $e^x$, $e^{2x}$).\n>>$y = C_1+C_2 e^x+C_3 e^{2x}$<<"},
{n:"6",text:"Verify $y_1=e^{2x}\\cos(x/\\sqrt{2})$, $y_2=e^{2x}\\sin(x/\\sqrt{2})$ satisfy $2y''-8y'+9y=0$. Confirm they are linearly independent. Write the general solution.",ptype:"superpos",solution:"Auxiliary: $2m^2-8m+9=0 \\to m=\\frac{8\\pm\\sqrt{64-72}}{4}=2\\pm\\frac{\\sqrt{2}}{2}i$.\nVerify $y_1$, $y_2$ by substitution: both give $0$ ✓\nIndependent (cos vs. sin factor).\n>>$y = e^{2x}\\left(C_1\\cos\\frac{x}{\\sqrt{2}}+C_2\\sin\\frac{x}{\\sqrt{2}}\\right)$<<"},
{n:"7",text:"Verify $y_1=\\frac{\\sin x}{\\sqrt{x}}$, $y_2=\\frac{\\cos x}{\\sqrt{x}}$ satisfy $x^2 y''+xy'+(x^2-\\frac{1}{4})y=0$. Confirm they are linearly independent. Write the general solution.",ptype:"superpos",solution:"Bessel's equation of order $1/2$.\nVerify $y_1=\\frac{\\sin x}{\\sqrt{x}}$: substitute into $x^2 y''+xy'+(x^2-\\frac{1}{4})y \\to 0$ ✓\nVerify $y_2=\\frac{\\cos x}{\\sqrt{x}}$: similarly $0$ ✓\nIndependent (sin vs. cos).\n>>$y = \\frac{C_1\\sin x+C_2\\cos x}{\\sqrt{x}}$<<"},
{n:"8",text:"Verify $y_1=\\cos(2\\ln x)$, $y_2=\\sin(2\\ln x)$ satisfy $x^2 y''+xy'+4y=0$. Confirm they are linearly independent. Write the general solution.",ptype:"superpos",solution:"Euler equation: try $y=x^m \\to m^2+4=0 \\to m=\\pm 2i$.\n$x^{2i} = e^{2i\\ln x} = \\cos(2\\ln x)+i\\sin(2\\ln x)$ → real/imaginary parts give $y_1$, $y_2$ ✓\nIndependent (cos vs. sin).\n>>$y = C_1\\cos(2\\ln x)+C_2\\sin(2\\ln x)$<<"},
{n:"9",text:"Show $y_1=-2/(x+1)$ and $y_2=-2/(x+2)$ both satisfy $y''=yy'$. Is $y=y_1+y_2$ a solution? Explain why or why not in terms of linearity.",ptype:"superpos",solution:"Verify $y_1$: $y_1'=\\frac{2}{(x+1)^2}$, $y_1''=\\frac{-4}{(x+1)^3} = y_1 \\cdot y_1'$ ✓\nVerify $y_2$: similarly ✓\n$y=y_1+y_2$: compute $y''$ and $yy'$ — they are NOT equal.\n$y''=yy'$ is NONLINEAR, so superposition does not apply — sum of two solutions is not a solution."},
{n:"10",text:"Prove that if $y_1,\\ldots,y_n$ are linearly dependent on $I$, then $W(y_1,\\ldots,y_n)\\equiv 0$ on $I$. (This shows $W\\neq 0$ at any point implies independence.)",ptype:"reduct",solution:"Linear dependence: $\\exists\\, C_1,\\ldots,C_n$ not all zero s.t. $C_1 y_1+\\cdots+C_n y_n\\equiv 0$.\nDifferentiate $n-1$ times $\\to$ $n$ equations forming a homogeneous linear system with coefficient matrix $W$.\nNon-trivial solution exists $\\to$ $\\det(W)=0$, so $W\\equiv 0$ on $I$.\nContrapositive: $W\\neq 0$ at any point $\\to$ linearly independent."},
{n:"11",text:"Use the Wronskian to test linear independence: $\\{1, x, x^2\\}$ on $-\\infty < x < \\infty$.",ptype:"reduct",solution:"$W(1,x,x^2) = \\det\\begin{vmatrix}1&x&x^2\\\\0&1&2x\\\\0&0&2\\end{vmatrix} = 2 \\neq 0$.\n>>LINEARLY INDEPENDENT<<"},
{n:"12",text:"Use the Wronskian to test linear independence: $\\{x, 2x-3x^2, x^2\\}$ on $-\\infty < x < \\infty$.",ptype:"reduct",solution:"$2x-3x^2 = 2(x)+(-3)(x^2)$ $\\to$ $y_2$ is a linear combination of $y_1$ and $y_3$, so $W=0$.\n>>LINEARLY DEPENDENT<<"},
{n:"13",text:"Use the Wronskian to test linear independence: $\\{\\sin x, \\cos x\\}$ on $0 \\leq x \\leq 2\\pi$.",ptype:"reduct",solution:"$W(\\sin x,\\cos x) = \\begin{vmatrix}\\sin x & \\cos x \\\\ \\cos x & -\\sin x\\end{vmatrix} = -\\sin^2 x-\\cos^2 x = -1 \\neq 0$.\n>>LINEARLY INDEPENDENT<<"},
{n:"14",text:"Use the Wronskian to test linear independence: $\\{x, xe^x, x^2 e^x\\}$ on $0 \\leq x \\leq 1$.",ptype:"reduct",solution:"Compute $3\\times 3$ Wronskian determinant; after factoring out $xe^{2x}$: $W = xe^{2x} \\neq 0$ for $x\\in(0,1]$.\n>>LINEARLY INDEPENDENT<<"},
{n:"15",text:"Use the Wronskian to test linear independence: $\\{x\\sin x, e^{2x}\\}$ on $-\\infty < x < \\infty$.",ptype:"reduct",solution:"$W = \\begin{vmatrix}x\\sin x & e^{2x} \\\\ \\sin x+x\\cos x & 2e^{2x}\\end{vmatrix} = e^{2x}(2x\\sin x-\\sin x-x\\cos x)$.\nAt $x=\\pi$: $W = e^{2\\pi}(0-0+\\pi) = \\pi e^{2\\pi} \\neq 0$.\n>>LINEARLY INDEPENDENT<<"}
]},
{id:"15.8",name:"15.8 Homogeneous — Constant Coefficients",test:"t3",ptypes:[
{id:"aux-real",name:"Real distinct roots"},
{id:"aux-rep",name:"Repeated real roots"},
{id:"aux-cx",name:"Complex conjugate roots"},
{id:"aux-given",name:"Reverse: find DE from its general solution"},
{id:"sturm",name:"Sturm-Liouville eigenvalue problems"}
],questions:[
{n:"1",text:"Find the general solution: $y'' + y' - 6y = 0$.",ptype:"aux-real",solution:"Auxiliary: $m^2+m-6 = (m+3)(m-1) = 0$\n$m = 1$,  $m = -3$  (real distinct roots)\n>>$y = C_1 e^x+C_2 e^{-3x}$<<"},
{n:"2",text:"Find the general solution: $2y'' - 16y' + 32y = 0$.",ptype:"aux-rep",solution:"Auxiliary: $2m^2-16m+32=2(m-4)^2=0 \\to m=4$ (double root).\n>>$y = (C_1+C_2 x)e^{4x}$<<"},
{n:"3",text:"Find the general solution: $2y'' + 16y' + 82y = 0$.",ptype:"aux-cx",solution:"Auxiliary: $2m^2+16m+82=0 \\to m^2+8m+41=0 \\to m=\\frac{-8\\pm\\sqrt{64-164}}{2}=-4\\pm 5i$.\nComplex roots: $\\alpha=-4$, $\\beta=5$.\n>>$y = e^{-4x}(C_1\\cos 5x+C_2\\sin 5x)$<<"},
{n:"4",text:"Find the general solution: $y'' + 2y' - 2y = 0$.",ptype:"aux-real",solution:"Auxiliary: $m^2+2m-2=0 \\to m=\\frac{-2\\pm\\sqrt{12}}{2}=-1\\pm\\sqrt{3}$\nReal distinct irrational roots\n>>$y = C_1 e^{(-1+\\sqrt{3})x}+C_2 e^{(-1-\\sqrt{3})x}$<<"},
{n:"5",text:"Find the general solution: $y'' - 4y' + 5y = 0$.",ptype:"aux-cx",solution:"Auxiliary: $m^2-4m+5=0 \\to m=\\frac{4\\pm\\sqrt{16-20}}{2}=2\\pm i$\nComplex roots: $\\alpha=2$, $\\beta=1$\n>>$y = e^{2x}(C_1\\cos x+C_2\\sin x)$<<"},
{n:"6",text:"Find the general solution: $y''' - 3y'' + y' - 3y = 0$.",ptype:"aux-cx",solution:"Try $m=3$: $27-27+3-3=0$ ✓ $\\to$ factor $(m-3)$.\n$m^3-3m^2+m-3 = (m-3)(m^2+1)=0 \\to m=3$, $m=\\pm i$\n>>$y = C_1 e^{3x}+C_2\\cos x+C_3\\sin x$<<"},
{n:"7",text:"Find the general solution: $y'''' + 2y'' + y = 0$.",ptype:"aux-rep",solution:"Auxiliary: $m^4+2m^2+1 = (m^2+1)^2=0$\n$m=\\pm i$ each with multiplicity $2$ (repeated complex: $\\alpha=0$, $\\beta=1$)\n>>$y = (C_1+C_2 x)\\cos x+(C_3+C_4 x)\\sin x$<<"},
{n:"8",text:"Find the general solution: $y''' - 6y'' + 12y' - 8y = 0$.",ptype:"aux-rep",solution:"Auxiliary: $m^3-6m^2+12m-8 = (m-2)^3=0$\n$m=2$  (triple root)\n>>$y = (C_1+C_2 x+C_3 x^2)e^{2x}$<<"},
{n:"9",text:"Find the general solution: $3y''' - 12y'' + 18y' - 12y = 0$.",ptype:"aux-rep",solution:"Divide by $3$: $y'''-4y''+6y'-4y=0$.\nTry $m=2$: $8-16+12-4=0$ ✓ $\\to$ factor $(m-2)(m^2-2m+2)=0$.\n$m=2$, $m=1\\pm i$.\n>>$y = C_1 e^{2x}+e^x(C_2\\cos x+C_3\\sin x)$<<"},
{n:"10",text:"Find the general solution: $y'''' + 5y'' + 4y = 0$.",ptype:"aux-cx",solution:"Auxiliary: $m^4+5m^2+4 = (m^2+1)(m^2+4)=0$\n$m=\\pm i$,  $m=\\pm 2i$\n>>$y = C_1\\cos x+C_2\\sin x+C_3\\cos 2x+C_4\\sin 2x$<<"},
{n:"11",text:"Find the general solution: $y''' - 3y'' + 2y' = 0$.",ptype:"aux-real",solution:"Auxiliary: $m^3-3m^2+2m = m(m-1)(m-2)=0$\n$m=0$,  $m=1$,  $m=2$\n>>$y = C_1+C_2 e^x+C_3 e^{2x}$<<"},
{n:"12",text:"Find the general solution: $y'''' + 16y = 0$.",ptype:"aux-cx",solution:"Auxiliary: $m^4+16=0$. Write $m=a+bi$: $m^2=\\pm 4i$.\nFor $m^2=4i$: $a^2-b^2=0$, $2ab=4 \\to a=b=\\sqrt{2} \\to m=\\sqrt{2}(1+i)$ or $\\sqrt{2}(-1-i)$.\nFor $m^2=-4i$: $m=\\sqrt{2}(1-i)$ or $\\sqrt{2}(-1+i)$.\nTwo conjugate pairs: $\\alpha=\\pm\\sqrt{2}$, $\\beta=\\sqrt{2}$.\n>>$y = e^{\\sqrt{2}x}(C_1\\cos(\\sqrt{2}x)+C_2\\sin(\\sqrt{2}x))+e^{-\\sqrt{2}x}(C_3\\cos(\\sqrt{2}x)+C_4\\sin(\\sqrt{2}x))$<<"},
{n:"13",text:"Find the DE whose general solution is $y(x) = C_1 e^x + (C_2+C_3 x)e^{-4x}$.",ptype:"aux-given",solution:"Roots: $m=1$ (simple), $m=-4$ (double).\nAuxiliary: $(m-1)(m+4)^2=m^3+7m^2+8m-16=0$.\n>>$y'''+7y''+8y'-16y = 0$<<"},
{n:"14",text:"Find the DE whose general solution is $y(x) = e^{-2x}(C_1\\cos 4x + C_2\\sin 4x)$.",ptype:"aux-given",solution:"Roots: $m=-2\\pm 4i$ (complex conjugate pair).\nAuxiliary: $(m+2)^2+16=m^2+4m+20=0$.\n>>$y''+4y'+20y = 0$<<"},
{n:"15",text:"Find the DE whose general solution is $y(x) = C_1 + C_2 e^{\\sqrt{3}\\,x} + C_3 e^{-\\sqrt{3}\\,x}$.",ptype:"aux-given",solution:"Roots: $m=0$, $m=\\sqrt{3}$, $m=-\\sqrt{3}$.\nAuxiliary: $m(m^2-3)=m^3-3m=0$.\n>>$y'''-3y' = 0$<<"},
{n:"16",text:"Find the DE whose general solution is $y(x) = e^x(C_1+C_2 x)\\cos(\\sqrt{2}\\,x) + e^x(C_3+C_4 x)\\sin(\\sqrt{2}\\,x)$.",ptype:"aux-given",solution:"Roots: $m=1\\pm\\sqrt{2}i$ each with multiplicity 2.\nAuxiliary: $[(m-1)^2+2]^2=(m^2-2m+3)^2=m^4-4m^3+10m^2-12m+9=0$.\n>>$y''''-4y'''+10y''-12y'+9y = 0$<<"},
{n:"17",text:"Show that $y=e^{ax}\\sin bx$ being a solution of $y''+2y'+10y=0$ forces $a=-1$, $b=\\pm 3$. Verify $e^{ax}\\cos bx$ is also a solution. Write the general solution.",ptype:"aux-cx",solution:""},
{n:"18",text:"The equation $y'''+ay''+by'+cy=0$ has general solution $y=C_1 e^{-x}+e^{-2x}(C_2\\sin 4x+C_3\\cos 4x)$. Find $a$, $b$, $c$.",ptype:"aux-cx",solution:""},
{n:"19",text:"Find the eigenvalues and eigenfunctions: $y''+\\lambda y=0$, $0<x<3$; $y(0)=0=y(3)$.",ptype:"sturm",solution:"$\\lambda<0$ and $\\lambda=0$: only trivial solutions.\n$\\lambda>0$: let $\\lambda=\\mu^2$. $y=C_1\\cos\\mu x+C_2\\sin\\mu x$.\n$y(0)=C_1=0 \\to y=C_2\\sin\\mu x$.\n$y(3)=C_2\\sin 3\\mu=0 \\to 3\\mu=n\\pi \\to \\mu=n\\pi/3$.\n>>$\\lambda_n = \\frac{n^2\\pi^2}{9}$,  $y_n = \\sin\\frac{n\\pi x}{3}$  $(n=1,2,3,\\ldots)$<<"},
{n:"20",text:"Find the eigenvalues and eigenfunctions: $y''+\\lambda y=0$, $0<x<4$; $y'(0)=0=y'(4)$.",ptype:"sturm",solution:"$\\lambda=0$: $y=C_1+C_2 x$. $y'(0)=C_2=0$, $y'(4)=0$ satisfied. So $\\lambda_0=0$, $y_0=1$ is an eigenvalue.\n$\\lambda>0$, $\\mu=\\sqrt{\\lambda}$: $y=C_1\\cos\\mu x+C_2\\sin\\mu x$.\n$y'(0)=C_2\\mu=0 \\to C_2=0$. $y'(4)=-C_1\\mu\\sin 4\\mu=0 \\to \\sin 4\\mu=0 \\to 4\\mu=n\\pi \\to \\mu=n\\pi/4$.\n>>$\\lambda_n = \\frac{n^2\\pi^2}{16}$,  $y_n = \\cos\\frac{n\\pi x}{4}$  $(n=0,1,2,\\ldots)$<<"},
{n:"21",text:"Find the eigenvalues and eigenfunctions: $y''+\\lambda y=0$, $0<x<2$; $y(0)=0=y'(2)$.",ptype:"sturm",solution:"$\\lambda>0$, $\\mu=\\sqrt{\\lambda}$: $y=C_1\\cos\\mu x+C_2\\sin\\mu x$.\n$y(0)=C_1=0 \\to y=C_2\\sin\\mu x$.\n$y'(2)=C_2\\mu\\cos 2\\mu=0 \\to \\cos 2\\mu=0 \\to 2\\mu=\\frac{(2n-1)\\pi}{2} \\to \\mu=\\frac{(2n-1)\\pi}{4}$.\n>>$\\lambda_n = \\frac{(2n-1)^2\\pi^2}{16}$,  $y_n = \\sin\\frac{(2n-1)\\pi x}{4}$  $(n=1,2,\\ldots)$<<"},
{n:"22",text:"Find the eigenvalues and eigenfunctions: $y''+\\lambda y=0$, $0<x<5$; $y'(0)=0=y(5)$.",ptype:"sturm",solution:"$\\lambda>0$, $\\mu=\\sqrt{\\lambda}$: $y=C_1\\cos\\mu x+C_2\\sin\\mu x$.\n$y'(0)=C_2\\mu=0 \\to C_2=0 \\to y=C_1\\cos\\mu x$.\n$y(5)=C_1\\cos 5\\mu=0 \\to 5\\mu=\\frac{(2n-1)\\pi}{2} \\to \\mu=\\frac{(2n-1)\\pi}{10}$.\n>>$\\lambda_n = \\frac{(2n-1)^2\\pi^2}{100}$,  $y_n = \\cos\\frac{(2n-1)\\pi x}{10}$  $(n=1,2,\\ldots)$<<"},
{n:"23",text:"Find the eigenvalues and eigenfunctions: $y''-y'+\\lambda y=0$, $0<x<1$; $y(0)=0=y(1)$.",ptype:"sturm",solution:"Auxiliary $m^2-m+\\lambda=0 \\to m=\\frac{1\\pm\\sqrt{1-4\\lambda}}{2}$. Need complex roots: $\\lambda>1/4$.\n$m=1/2\\pm i\\omega$ where $\\omega=\\frac{\\sqrt{4\\lambda-1}}{2}$. $y=e^{x/2}(C_1\\cos\\omega x+C_2\\sin\\omega x)$.\n$y(0)=C_1=0$. $y(1)=0 \\to \\sin\\omega=0 \\to \\omega=n\\pi \\to \\lambda_n=\\frac{4n^2\\pi^2+1}{4}$.\n>>$\\lambda_n = \\frac{4n^2\\pi^2+1}{4}$,  $y_n = e^{x/2}\\sin(n\\pi x)$  $(n=1,2,\\ldots)$<<"},
{n:"24",text:"A mass $M$ in the $xy$-plane is subjected to a force always directed toward the origin with magnitude proportional to its distance from the origin. At a certain instant $M$ passes through $(x_0,0)$ with speed $v$ in the positive $y$-direction. (a) Find the path of $M$ assuming no friction and no damping. (b) Find the path if the force is away from the origin instead.",ptype:"aux-cx",solution:"(a) Force toward origin: $M\\frac{d^2x}{dt^2}=-kx$, $M\\frac{d^2y}{dt^2}=-ky$. Let $\\omega=\\sqrt{k/M}$.\nICs: $x(0)=x_0$, speed $v$ in $+y$: $x(t)=x_0\\cos\\omega t$, $y(t)=\\frac{v}{\\omega}\\sin\\omega t$.\nEliminating $t$: $\\frac{x^2}{x_0^2}+\\frac{ky^2}{Mv^2}=1$ — an ellipse.\n(b) Force away from origin: solutions are $x(t)=x_0\\cosh\\omega t$, $y(t)=\\frac{v}{\\omega}\\sinh\\omega t$.\nPath: $\\frac{x^2}{x_0^2}-\\frac{ky^2}{Mv^2}=1$ — a hyperbola."},
{n:"27",text:"If $M$, $\\beta$, and $k$ are all positive constants, find a general solution for $M\\frac{d^2x}{dt^2}+\\beta\\frac{dx}{dt}+kx=0$. Discuss all possibilities: underdamped ($\\beta^2<4kM$), critically damped ($\\beta^2=4kM$), and overdamped ($\\beta^2>4kM$).",ptype:"aux-rep",solution:""}
]},
{id:"15.9",name:"15.9 Nonhomogeneous — Constant Coefficients",test:"t3",ptypes:[
{id:"both",name:"Full solution: find yₕ + yₚ by both methods"},
{id:"form-only",name:"State the form of yₚ only (do not evaluate)"}
],questions:[
{n:"1",text:"Find $y_p$ by both undetermined coefficients and operator methods; find the general solution: $2y''-16y'+32y = -e^{4x}$.",ptype:"both",solution:"$y_h$: $2(m-4)^2=0 \\to m=4$ (double). $y_h=(C_1+C_2 x)e^{4x}$.\n$e^{4x}$ duplicates $y_h$ ($k=2$) $\\to$ $y_p=Ax^2 e^{4x}$.\nSub: $4Ae^{4x}=-e^{4x} \\to A=-1/4$.\n>>$y = (C_1+C_2 x)e^{4x}-\\frac{x^2}{4}e^{4x}$<<"},
{n:"2",text:"Find $y_p$ by both undetermined coefficients and operator methods; find the general solution: $y''+2y'-2y = x^2 e^{-x}$.",ptype:"both",solution:"$y_h$: $m^2+2m-2=0 \\to m=-1\\pm\\sqrt{3}$, $y_h=C_1 e^{(-1+\\sqrt{3})x}+C_2 e^{(-1-\\sqrt{3})x}$\n$m=-1$ not a root $\\to$ try $y_p=(Ax^2+Bx+C)e^{-x}$.\nEquate coefficients: $-3A=1 \\to A=-1/3$; $-3B=0 \\to B=0$; $2A-3C=0 \\to C=-2/9$.\n>>$y = C_1 e^{(-1+\\sqrt{3})x}+C_2 e^{(-1-\\sqrt{3})x}-e^{-x}\\left(\\frac{x^2}{3}+\\frac{2}{9}\\right)$<<"},
{n:"3",text:"Find $y_p$ by both undetermined coefficients and operator methods; find the general solution: $y'''-3y''+y'-3y = 3xe^x+2$.",ptype:"both",solution:"$y_h$: $(m-3)(m^2+1)=0 \\to m=3,\\pm i$. $y_h=C_1 e^{3x}+C_2\\cos x+C_3\\sin x$.\nFor $3xe^x$: $y_{p1}=(Ax+B)e^x$. Sub: $-4Ax+(-2A-4B)=3x+0 \\to A=-3/4$; $-2(-3/4)-4B=0 \\to B=3/8$.\nFor $2$: $y_{p2}=C \\to -3C=2 \\to C=-2/3$.\n>>$y = C_1 e^{3x}+C_2\\cos x+C_3\\sin x+e^x\\frac{3(1-2x)}{8}-\\frac{2}{3}$<<"},
{n:"4",text:"Find $y_p$ by both undetermined coefficients and operator methods; find the general solution: $y''''+2y''+y = \\cos 2x$.",ptype:"both",solution:"$y_h$: $(m^2+1)^2=0 \\to m=\\pm i$ (mult. $2$) $\\to$ $y_h=(C_1+C_2 x)\\cos x+(C_3+C_4 x)\\sin x$\n$m=2i$ not a root $\\to$ $y_p=A\\cos 2x+B\\sin 2x$.\nSub: $(16-8+1)y_p=9y_p=\\cos 2x \\to A=1/9$, $B=0$.\n>>$y = (C_1+C_2 x)\\cos x+(C_3+C_4 x)\\sin x+\\frac{\\cos 2x}{9}$<<"},
{n:"5",text:"Find $y_p$ by both undetermined coefficients and operator methods; find the general solution: $y'''-6y''+12y'-8y = 2e^{2x}$.",ptype:"both",solution:"$y_h$: $(m-2)^3=0 \\to m=2$ (triple) $\\to$ $y_h=(C_1+C_2 x+C_3 x^2)e^{2x}$\n$e^{2x}$ duplicates $y_h$ ($k=3$) $\\to$ $y_p=Ax^3 e^{2x}$.\nSubstitute: $6Ae^{2x}=2e^{2x} \\to A=1/3$.\n>>$y = (C_1+C_2 x+C_3 x^2)e^{2x}+\\frac{x^3 e^{2x}}{3}$<<"},
{n:"6",text:"Find $y_p$ by both undetermined coefficients and operator methods; find the general solution: $y''''+5y''+4y = e^{-2x}$.",ptype:"both",solution:"$y_h$: $(m^2+1)(m^2+4)=0 \\to m=\\pm i,\\pm 2i$. $y_h=C_1\\cos x+C_2\\sin x+C_3\\cos 2x+C_4\\sin 2x$.\n$m=-2$ not a root $\\to$ $y_p=Ae^{-2x}$.\n$\\varphi(-2)=16+20+4=40 \\to A=1/40$.\n>>$y = C_1\\cos x+C_2\\sin x+C_3\\cos 2x+C_4\\sin 2x+\\frac{e^{-2x}}{40}$<<"},
{n:"7",text:"Find $y_p$ by both undetermined coefficients and operator methods; find the general solution: $y'''-3y''+2y' = x^2+e^{-x}$.",ptype:"both",solution:"$y_h$: $m(m-1)(m-2)=0 \\to m=0,1,2$. $y_h=C_1+C_2 e^x+C_3 e^{2x}$.\nFor $x^2$ ($m=0$ root, $k=1$): $y_{p1}=x(Ax^2+Bx+C)$. Equate: $A=1/6$, $B=3/4$, $C=7/4$.\nFor $e^{-x}$: $y_{p2}=De^{-x} \\to -6D=1 \\to D=-1/6$.\n>>$y = C_1+C_2 e^x+C_3 e^{2x}+x\\left(\\frac{x^2}{6}+\\frac{3x}{4}+\\frac{7}{4}\\right)-\\frac{e^{-x}}{6}$<<"},
{n:"8",text:"Find $y_p$ by both undetermined coefficients and operator methods; find the general solution: $2y''+16y'+82y = -2e^{2x}\\sin x$.",ptype:"both",solution:"$y_h$: $m^2+8m+41=0 \\to m=-4\\pm 5i$. $y_h=e^{-4x}(C_1\\cos 5x+C_2\\sin 5x)$.\n$F(x)=\\text{Im}(-2e^{(2+i)x})$; $m=2+i$ not a root.\n$\\varphi(2+i)=2(3+4i)+(16+16i)+82=120+24i$.\n$y_p=\\text{Im}[-2e^{(2+i)x}/(120+24i)]$. Multiply by conjugate: denominator $120^2+24^2=15576$.\n$y_p=e^{2x}(-\\cos x+5\\sin x)/312$.\n>>$y = e^{-4x}(C_1\\cos 5x+C_2\\sin 5x)+\\frac{e^{2x}(-\\cos x+5\\sin x)}{312}$<<"},
{n:"9",text:"Find $y_p$ by both undetermined coefficients and operator methods; find the general solution: $y''+y'-6y = x+\\cos x$.",ptype:"both",solution:"$y_h$: $(m+3)(m-2)=0 \\to m=-3,2$. $y_h=C_1 e^{-3x}+C_2 e^{2x}$.\nFor $x$: $y_{p1}=Ax+B \\to -6A=1 \\to A=-1/6$; $A-6B=0 \\to B=-1/36$.\nFor $\\cos x$: $y_{p2}=C\\cos x+D\\sin x \\to -7C+D=1$, $C+7D=0 \\to D=1/50$, $C=-7/50$.\n>>$y = C_1 e^{-3x}+C_2 e^{2x}-\\frac{6x+1}{36}+\\frac{\\sin x-7\\cos x}{50}$<<"},
{n:"10",text:"Find $y_p$ by both undetermined coefficients and operator methods; find the general solution: $y''-4y'+5y = x\\cos x$.",ptype:"both",solution:"$y_h$: $m^2-4m+5=0 \\to m=2\\pm i$. $y_h=e^{2x}(C_1\\cos x+C_2\\sin x)$.\n$x\\cos x=\\text{Re}(xe^{ix})$; $m=i$ not a root. Use operator method: $\\varphi(D+i)=D^2+(2i-4)D+(4-4i)$.\nExpand $\\frac{1}{4-4i}[1-\\ldots]\\cdot x$: $A=1/8$, $B=-1/8$.\n$y_p=x(\\cos x-\\sin x)/8+(\\cos x-2\\sin x)/16$.\n>>$y = e^{2x}(C_1\\cos x+C_2\\sin x)+\\frac{x(\\cos x-\\sin x)}{8}+\\frac{\\cos x-2\\sin x}{16}$<<"},
{n:"11",text:"Find $y_p$ by both undetermined coefficients and operator methods; find the general solution: $3y'''-12y''+18y'-12y = x^2+3x-4$.",ptype:"both",solution:"Divide by $3$: $y'''-4y''+6y'-4y=\\frac{x^2+3x-4}{3}$.\n$y_h$: $(m-2)(m^2-2m+2)=0 \\to m=2$, $m=1\\pm i$. $y_h=C_1 e^{2x}+e^x(C_2\\cos x+C_3\\sin x)$.\n$y_p=Ax^2+Bx+C$. Equate: $A=-1/12$, $B=-1/2$, $C=-1/4$.\n>>$y = C_1 e^{2x}+e^x(C_2\\cos x+C_3\\sin x)-\\frac{x^2}{12}-\\frac{x}{2}-\\frac{1}{4}$<<"},
{n:"12",text:"State the form of $y_p$ only (do not evaluate coefficients): $y'''+9y''+27y'+27y = xe^{3x}+2x\\cos x$.",ptype:"form-only",solution:"$y_h$: $(m+3)^3=0 \\to m=-3$ (triple).\nFor $xe^{3x}$ ($m=3$ not a root): $y_{p1}=(Ax+B)e^{3x}$.\nFor $2x\\cos x$ ($m=\\pm i$ not roots): $y_{p2}=(Cx+D)\\cos x+(Ex+F)\\sin x$.\n>>$y_p = (Ax+B)e^{3x}+(Cx+D)\\cos x+(Ex+F)\\sin x$<<"},
{n:"13",text:"State the form of $y_p$ only (do not evaluate coefficients): $y'''+4y''+y'+4y = xe^x\\sin x$.",ptype:"form-only",solution:"$y_h$: $(m+4)(m^2+1)=0 \\to m=-4,\\pm i$.\n$xe^x\\sin x = \\text{Im}(xe^{(1+i)x})$; $m=1+i$ not a root.\n>>$y_p = (Ax+B)e^x\\cos x+(Cx+D)e^x\\sin x$<<"},
{n:"14",text:"State the form of $y_p$ only (do not evaluate coefficients): $2y'''-6y''-12y'+16y = xe^x+2x^3-4\\cos x$.",ptype:"form-only",solution:"$y_h$: $(m-1)(m+2)(m-4)=0 \\to m=1,-2,4$.\nFor $xe^x$ ($m=1$ IS a root, $k=1$): $y_{p1}=x(Ax+B)e^x=(Ax^2+Bx)e^x$.\nFor $2x^3$ ($m=0$ not a root): $y_{p2}=Cx^3+Dx^2+Ex+F$.\nFor $-4\\cos x$ ($m=\\pm i$ not roots): $y_{p3}=G\\cos x+H\\sin x$.\n>>$y_p = (Ax^2+Bx)e^x+Cx^3+Dx^2+Ex+F+G\\cos x+H\\sin x$<<"},
{n:"15",text:"State the form of $y_p$ only (do not evaluate coefficients): $2y''-4y'+10y = 5e^x\\sin 2x$.",ptype:"form-only",solution:"$y_h$: $m^2-2m+5=0 \\to m=1\\pm 2i$.\n$5e^x\\sin 2x=\\text{Im}(5e^{(1+2i)x})$; $m=1+2i$ IS a root ($k=1$).\n>>$y_p = xe^x(A\\cos 2x+B\\sin 2x)$<<"},
{n:"17",text:"Find a general solution for $y'' + 2y' - 4y = \\cos^2 x$. Hint: use the identity $\\cos^2 x = (1+\\cos 2x)/2$.",ptype:"both",solution:"$y_h$: $m^2+2m-4=0 \\to m=-1\\pm\\sqrt{5}$. $y_h=C_1 e^{(-1+\\sqrt{5})x}+C_2 e^{(-1-\\sqrt{5})x}$.\nUse $\\cos^2 x=(1+\\cos 2x)/2$. For constant $1/2$: $y_{p1}=A \\to -4A=1/2 \\to A=-1/8$.\nFor $\\cos 2x/2$: $y_{p2}=B\\cos 2x+C\\sin 2x$. Sub: $-8B+4C=1/2$; $C=-B$ from $-4C=4B$.\n$-8B-4B=1/2 \\to B=-1/24$, $C=1/24$.\n>>$y = C_1 e^{(-1+\\sqrt{5})x}+C_2 e^{(-1-\\sqrt{5})x}-\\frac{1}{8}+\\frac{\\sin 2x-\\cos 2x}{24}$<<"},
{n:"18",text:"Find a general solution for $2y'' - 4y' + 3y = \\cos x\\sin 2x$. Hint: use the product-to-sum identity to rewrite the right side.",ptype:"both",solution:"$y_h$: $2m^2-4m+3=0 \\to m=1\\pm\\frac{1}{\\sqrt{2}}i$. $y_h=e^x\\left(C_1\\cos\\frac{x}{\\sqrt{2}}+C_2\\sin\\frac{x}{\\sqrt{2}}\\right)$.\nUse $\\cos x \\cdot \\sin 2x=(\\sin 3x+\\sin x)/2$.\nFor $\\sin 3x/2$: $y_{p1}=A\\cos 3x+B\\sin 3x$; equate coefficients.\nFor $\\sin x/2$: $y_{p2}=C\\cos x+D\\sin x$; equate coefficients.\nFull computation gives $y_p=\\frac{-4\\cos 3x+5\\sin 3x}{246}+\\frac{4\\cos x+\\sin x}{34}$.\n>>$y = e^x\\left(C_1\\cos\\frac{x}{\\sqrt{2}}+C_2\\sin\\frac{x}{\\sqrt{2}}\\right)+\\frac{-4\\cos 3x+5\\sin 3x}{246}+\\frac{4\\cos x+\\sin x}{34}$<<"},
{n:"19",text:"Solve the IVP fully: $y''-3y'+2y = 8x^2+12e^{-x}$, $y(0)=0$, $y'(0)=2$.",ptype:"both",solution:"$y_h$: $(m-1)(m-2)=0 \\to m=1,2$. $y_h=C_1 e^x+C_2 e^{2x}$.\nFor $8x^2$: $y_{p1}=Ax^2+Bx+C \\to A=4$, $B=12$, $C=14$.\nFor $12e^{-x}$: $y_{p2}=De^{-x} \\to 6D=12 \\to D=2$.\n$y(0)=C_1+C_2+14+2=0 \\to C_1+C_2=-16$.\n$y'(0)=C_1+2C_2+12-2=2 \\to C_1+2C_2=-8$.\n$C_2=8$, $C_1=-24$.\n>>$y = -24e^x+8e^{2x}+4x^2+12x+14+2e^{-x}$<<"},
{n:"20",text:"Solve the IVP fully: $y''+9y = x(\\sin 3x+\\cos 3x)$, $y(0)=y'(0)=0$.",ptype:"both",solution:"$y_h$: $m^2+9=0 \\to m=\\pm 3i$. $y_h=C_1\\cos 3x+C_2\\sin 3x$.\n$\\sin 3x$, $\\cos 3x$ in $y_h$ ($k=1$) $\\to$ $y_p=x[(Ax+B)\\cos 3x+(Cx+D)\\sin 3x]$.\nSubstitute into $y''+9y$: equate $x\\cos 3x$, $x\\sin 3x$, $\\cos 3x$, $\\sin 3x$ terms.\nResult: $C=1/36$ for $x\\cos 3x$ part, $A=0$; $B=-1/108$ from $\\sin 3x$ part.\n$y(0)=C_1=0$; $y'(0)=3C_2+D=0 \\to C_2=-1/108$.\n>>$y = -\\frac{\\sin 3x}{108}+\\frac{x}{36}(\\cos 3x+\\sin 3x)+\\frac{x^2}{12}(\\sin 3x-\\cos 3x)$<<"},
{n:"21",text:"If $J$, $k$, and $w$ are positive constants, find a general solution for $J\\frac{d^4y}{dx^4}+ky=w$.",ptype:"both",solution:""},
{n:"23",text:"Use the substitution $x=e^z$ to find a general solution for $\\frac{d^2u}{dr^2}+\\frac{1}{r}\\frac{du}{dr}-\\frac{u}{r^2}=0$, $r>0$. (Euler equation in $r$.)",ptype:"both",solution:""},
{n:"24",text:"Use the substitution $x=e^z$ to find a general solution for $x^2 y''+xy'+4y=1$, $x>0$.",ptype:"both",solution:"$y_h$: Euler equation, try $y=x^m \\to m^2+4=0 \\to m=\\pm 2i$.\n$y_h = C_1\\cos(2\\ln x)+C_2\\sin(2\\ln x)$\n$y_p$: try $y_p=A$ (constant) $\\to$ $4A=1 \\to A=1/4$.\n>>$y = C_1\\cos(2\\ln x)+C_2\\sin(2\\ln x)+\\frac{1}{4}$<<"}
]},
{id:"15.10",name:"15.10 Applications of Linear DEs",test:"t3",ptypes:[
{id:"spring",name:"Mass-spring systems (mechanical vibration)"},
{id:"circuit",name:"LCR electrical circuits"},
{id:"beam",name:"Other applications"}
],questions:[
{n:"1",text:"A 1-kg mass on a spring with constant 16 N/m is pulled 10 cm below equilibrium and released. Find x(t) for: (a) no damping, (b) damping force in newtons equal to 0.1 times the velocity in m/s, (c) damping force in newtons equal to 10 times the velocity in m/s. Classify the motion in each case.",ptype:"spring",solution:"(a) $\\beta=0$: $x''+16x=0 \\to m=\\pm 4i$. ICs: $x(0)=-0.1$, $x'(0)=0 \\to x(t)=-0.1\\cos 4t$ (SHM, amplitude $0.1$ m, period $\\pi/2$ s).\n(b) $\\beta=0.1$: $m^2+0.1m+16=0 \\to m\\approx -0.05\\pm\\sqrt{15.9994}\\,i$ — underdamped. $x(t)=e^{-0.05t}(C_1\\cos(\\sqrt{15.9994}\\,t)+C_2\\sin(\\sqrt{15.9994}\\,t))$. Apply ICs.\n(c) $\\beta=10$: $(m+2)(m+8)=0 \\to m=-2,-8$ — overdamped. $C_1+C_2=-0.1$, $-2C_1-8C_2=0 \\to C_2=\\tfrac{1}{30}$, $C_1=-\\tfrac{2}{15}$. $x(t)=-\\tfrac{2}{15}e^{-2t}+\\tfrac{1}{30}e^{-8t}$."},
{n:"2",text:"A 200-g mass on a spring with k=10N/m is subject to external force 4sin10t N and damping = (3/2)×velocity. Find position as a function of time.",ptype:"spring",solution:"$M=0.2$, $k=10$, $β=1.5$, $F=4sin10t$.\nDE: $0.2x''+1.5x'+10x=4sin10t→2x''+15x'+100x=40sin10t$.\n$yₕ$: $2m²+15m+100=0→m=(−15±5√23i)/4$ (underdamped).\n$yₚ=Asin10t+Bcos10t$: $−100A+150B=40$; $150A+100B=0→A=−4/65$, $B=6/65$.\nApply ICs $x(0)=x'(0)=0$ to find $C₁$, $C₂$.\n>>$x(t) = e^{−15t/4}(C₁cos(5√23t/4)+C₂sin(5√23t/4))+(−4sin10t+6cos10t)/65$<<"},
{n:"3",text:"Series LC circuit: 0.001F capacitor, 2H inductor, 20V DC battery in series. No initial charge. Find I(t).",ptype:"circuit",solution:"DE: $2Q''+1000Q=20→Q''+500Q=10$.\n$m=±√500i=±10√5i$. $Qₕ=C₁cos(10√5t)+C₂sin(10√5t)$; $Qₚ=1/50$.\nICs: $Q(0)=0→C₁=−1/50$; $Q'(0)=I(0)=0→C₂=0$.\n$Q(t)=(1/50)(1−cos(10√5t))$.\n>>$I(t) = (√5/5)sin(10√5t)$ A<<"},
{n:"4",text:"Series RLC circuit: 0.02F capacitor, 100Ω resistor, 1H inductor in series. Q(0)=5C. Find Q(t).",ptype:"circuit",solution:"DE: $Q''+100Q'+50Q=0$.\nAuxiliary: $m²+100m+50=0→m=−50±35√2$.\n$m₁≈−0.505$, $m₂≈−99.495$ (overdamped).\nICs: $C₁+C₂=5$; $m₁C₁+m₂C₂=0→C₁=5m₂/(m₂−m₁)$, $C₂=−5m₁/(m₂−m₁)$.\n>>$Q(t) = C₁e^{m₁t}+C₂e^{m₂t}$ C<<"},
{n:"5",text:"Series RL circuit: 5H inductor, 20Ω resistor, generator 10sin2t. Find the transient and steady-state currents.",ptype:"circuit",solution:"First-order in $I$: $5I'+20I=20\\cos 2t \\to I'+4I=4\\cos 2t$. Integrating factor $\\mu=e^{4t}$.\n$\\frac{d}{dt}[Ie^{4t}]=4e^{4t}\\cos 2t$. Integrate: $Ie^{4t}=\\frac{e^{4t}(4\\cos 2t+2\\sin 2t)}{5}+C$.\n$I(t)=Ce^{-4t}+\\frac{2\\sin 2t+4\\cos 2t}{5}$. (Apply IC $I(0)=0$ for $C$.)\nTRANSIENT: $Ce^{-4t}$ A. STEADY-STATE: $\\frac{2\\sin 2t-\\cos 2t}{5}$ A."},
{n:"6",text:"A mass M attached to a spring k is released from rest at t=0. No damping. Find displacement as a function of time.",ptype:"spring",solution:"DE: $Mx''+kx=0$; $ω₀=√(k/M)$.\nGeneral: $x(t)=C₁cosω₀t+C₂sinω₀t$.\nICs $x(0)=x₀$, $x'(0)=0→C₁=x₀$, $C₂=0$.\n>>$x(t) = x₀cos(ω₀t)$<<  (amplitude $x₀$, period $2π/ω₀$)"},
{n:"7",text:"(a) A 0.5-kg mass on a table is attached to a spring with k=18N/m; stretched 5cm and released. Friction force = 0.5N. Show the DE is d²x/dt²+36x=1, x(0)=0.05, x'(0)=0. (b) Find where the mass first comes to rest. Will it move again?",ptype:"spring",solution:"(a) Friction $=0.5$ N (opposing motion, so $+$ when moving left). DE: $0.5x''+18x=0.5→x''+36x=1$. ICs $x(0)=0.05$, $x'(0)=0$.\n(b) $m=±6i$. $x(t)=C₁cos6t+C₂sin6t+1/36$.\nICs: $C₁=0.05−1/36=1/45$; $C₂=0$.\n$x(t)=(1/45)cos6t+1/36$. First rest: $x'=0→sin6t=0→t=π/6$.\n$x(π/6)=(1/45)(−1)+1/36=−1/45+1/36=1/180$ m.\nSpring force $=18(1/180)=0.1$ N $<$ friction $0.5$ N → mass stays at rest."},
{n:"8",text:"Repeat Exercise 7 with the mass pulled 25cm to the right.",ptype:"spring",solution:"Same DE: $x''+36x=1$. ICs $x(0)=0.25$, $x'(0)=0$.\n$x(t)=C₁cos6t+C₂sin6t+1/36$.\nICs: $C₁=0.25−1/36=2/9$; $C₂=0$.\n$x(t)=(2/9)cos6t+1/36$. First rest at $t=π/6$: $x(π/6)=(2/9)(−1)+1/36=−7/36$ m.\nSpring force $=18(7/36)=3.5$ N $>$ friction $0.5$ N → mass WILL continue to move."},
{n:"9",text:"An uncharged 0.1F capacitor, 0.5H inductor, and 3Ω resistor in series. Current at t=0 is 1A. Find the maximum charge on the capacitor.",ptype:"circuit",solution:"DE: $0.5Q''+3Q'+(1/0.1)Q=0→Q''+6Q'+20Q=0$.\nAuxiliary: $m²+6m+20=0→m=−3±√11i$.\n$Q(t)=e^{−3t}(C₁cos√11t+C₂sin√11t)$.\nICs: $Q(0)=0→C₁=0$; $I(0)=Q'(0)=1→C₂√11=1→C₂=1/√11$.\n$Q(t)=(e^{−3t}/√11)sin(√11t)$.\nMaximum when $Q'=0→tan(√11t)=√11/3→t*=(1/√11)arctan(√11/3)$.\n>>$Q_{max} ≈ 0.105$ C<<"},
{n:"10",text:"Show that the DE Mx''+βx'+kx=0 gives: (a) β=0 → SHM; (b) β²−4kM<0 → underdamped; (c) β²−4kM>0 → overdamped; (d) β²−4kM=0 → critically damped.",ptype:"spring",solution:""},
{n:"11",text:"Piston: md²x/dt² + β dx/dt + kx = AP(t). Find the steady-state solution when P(t) = P₀sinωt.",ptype:"spring",solution:""},
{n:"12",text:"A 100-g mass on a spring with k=4000N/m: x(0)=0, x'(0)=10m/s, external force 3cos200t. Find x(t). Does resonance occur?",ptype:"spring",solution:"$ω₀=√(k/M)=√(4000/0.1)=200$ rad/s $=$ forcing frequency → RESONANCE.\nDE: $x''+40000x=30cos200t$; $cos200t$ in $yₕ$ → $yₚ=t(Acos200t+Bsin200t)$.\n$yₚ''+40000yₚ=400Bcos200t−400Asin200t=30cos200t→B=3/40$, $A=0$.\nICs: $C₁=0$; $200C₂=10→C₂=1/20$.\n>>$x(t) = (1/20)sin200t+(3t/40)sin200t$ m<<  (grows without bound — resonance)"},
{n:"13",text:"A 1-kg mass on a spring with k=64N/m: F(t)=2sin8t, x(0)=x'(0)=0, no damping. Find x(t). What happens as t→∞?",ptype:"spring",solution:"$ω₀=√64=8=$ forcing frequency → RESONANCE.\nDE: $x''+64x=2sin8t$; $sin8t$ in $yₕ$ → $yₚ=t(Acos8t+Bsin8t)$.\n$yₚ''+64yₚ=16Bcos8t−16Asin8t=2sin8t→A=−1/8$, $B=0$.\nICs: $C₁=0$; $8C₂−1/8=0→C₂=1/64$.\n>>$x(t) = (1/64)sin8t−(t/8)cos8t$ m<<  (grows without bound as $t→∞$)"},
{n:"14",text:"A mass M on a spring k is subjected to force Acosωt. Find the forcing frequency ω that causes resonance.",ptype:"spring",solution:"DE: $Mx''+kx=Acosωt$. $ω₀=√(k/M)$.\nResonance when forcing frequency equals natural frequency.\nAt $ω=ω₀$: $yₚ=(A/(2Mω₀))tsin(ω₀t)$ — grows without bound.\n>>$ω = ω₀ = √(k/M)$<<"},
{n:"15",text:"A series LC circuit has inductance 25/9 H, capacitance 0.04 F, and applied voltage 15cos3t V. Find I(t). Does resonance occur?",ptype:"circuit",solution:"$\\omega_0=\\frac{1}{\\sqrt{LC}}=\\frac{1}{\\sqrt{\\frac{25}{9}\\cdot 0.04}}=3$ rad/s. Forcing $\\omega=3=\\omega_0$ → RESONANCE.\nDE (in $I$): $\\frac{25}{9}I''+25I=-45\\sin 3t \\to I''+9I=-\\frac{81}{5}\\sin 3t$. Roots $m=\\pm 3i$ — resonance.\n$I_p=\\frac{27t}{10}\\cos 3t$. ICs: $I(0)=0 \\to C_1=0$; $I'(0)=0 \\to 3C_2+\\frac{27}{10}=0 \\to C_2=-\\frac{9}{10}$.\n>>$I(t) = -\\frac{9}{10}\\sin 3t+\\frac{27t}{10}\\cos 3t$ A — resonance confirmed.<<"},
{n:"16",text:"A mass M on a spring k with damping β, subjected to force Acosωt. (a) Show the steady-state amplitude is A/√[(k−Mω²)²+β²ω²]. (b) Write in the form A·sin(ωt+φ)/√[...]. (c) Find ω for maximum amplitude.",ptype:"spring",solution:""},
{n:"17",text:"(a) A cube L metres per side, mass M, floats half submerged. Pushed down slightly. Find the DE for oscillations using Archimedes' principle. (b) Find the frequency of oscillation.",ptype:"spring",solution:"(a) Let $x=$ displacement downward from equilibrium. Buoyancy at displacement $x$: extra upward force $=ρ_{water}gL²x$. Newton: $Mẍ=−ρ_{water}gL²x$. At equilibrium $M=ρ_{water}L³/2$.\n>>$Mẍ+ρ_{water}gL²x=0$<<\n(b) $ω²=ρ_{water}gL²/M=2g/L$ (using $M=ρ_{water}L³/2$).\n>>$f = (1/2π)√(2g/L)$ Hz<<"},
{n:"18",text:"A weighing platform of weight W is supported by springs with combined spring constant k. A package of weight w is dropped onto the platform so they move together. Find the maximum value of w so that oscillations do not occur. Assume damping constant β.",ptype:"spring",solution:""},
{n:"19",text:"A spring-mounted two-wheel trailer of mass 400 kg is towed at speed v over an undulating road $Y=Acos(πx/5)$ m. No damping, spring constant 40000 N/m. Find the speed at which resonance occurs.",ptype:"spring",solution:""},
{n:"20",text:"In Example 15.29, $M=200$ kg, $k=50000$ N/m, $β=3000$ kg/s, road equation $Y=0.1sin(πx/40)$ m. (a) Find $y(t)$ for $v=10$ m/s and state the amplitude of the steady-state solution. (b) Repeat for $v=20$ m/s.",ptype:"spring",solution:""}
]}
]}
]};
