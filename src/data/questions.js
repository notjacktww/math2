export const DATA = {tests:[
{id:"t1",name:"Test 1",date:"Feb 3",color:"#7F77DD",sections:[

{id:"10.1",name:"10.1 Infinite Sequences of Numbers",test:"t1",ptypes:[
{id:"conv",name:"Find the limit / convergence"},
{id:"mct",name:"Monotone Convergence Theorem"}
],questions:[
{n:"1",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = n/(n+1)",ptype:"conv"},
{n:"2",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (2n−1)/(3n+2)",ptype:"conv"},
{n:"3",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (n²+1)/(2n²−3)",ptype:"conv"},
{n:"4",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = sin(n)/n",ptype:"conv"},
{n:"5",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (−1)ⁿ/n",ptype:"conv"},
{n:"6",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = n·e^(−n)",ptype:"conv"},
{n:"7",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = ln(n)/n. Apply L'Hôpital by treating n as continuous variable x.",ptype:"conv"},
{n:"8",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = n^(1/n). Hint: take ln aₙ and apply L'Hôpital.",ptype:"conv"},
{n:"9",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (1 + 1/n)ⁿ. This is a classic — recall the definition of e.",ptype:"conv"},
{n:"10",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = n²/eⁿ. Apply L'Hôpital twice.",ptype:"conv"},
{n:"11",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (2n)!/(2n+2)!. Simplify the factorial ratio first.",ptype:"conv"},
{n:"12",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = n!/nⁿ. Use ratio of consecutive terms to show it goes to 0.",ptype:"conv"},
{n:"13",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (3n+1)/(2n−5)",ptype:"conv"},
{n:"14",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (n²−4)/(n+2). Simplify by factoring.",ptype:"conv"},
{n:"15",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = cos(nπ)/(n+1)",ptype:"conv"},
{n:"16",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (2ⁿ+3ⁿ)/4ⁿ. Divide numerator and denominator by 4ⁿ.",ptype:"conv"},
{n:"17",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = n sin(1/n). Substitute x = 1/n and use lim(x→0) sinx/x = 1.",ptype:"conv"},
{n:"18",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = arctan(n)",ptype:"conv"},
{n:"19",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = n(1 − cos(1/n)). Use known limit or Taylor series.",ptype:"conv"},
{n:"20",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (√(n+1) − √n). Rationalize by multiplying by (√(n+1)+√n)/(√(n+1)+√n).",ptype:"conv"},
{n:"21",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (1 + 2/n)ⁿ. Recognize as a limit of the form (1+a/n)ⁿ → eᵃ.",ptype:"conv"},
{n:"22",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = n^(2/n). Take ln aₙ = (2/n)ln n and use L'Hôpital.",ptype:"conv"},
{n:"23",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (n+2)^(1/n). Take ln aₙ = ln(n+2)/n → 0.",ptype:"conv"},
{n:"24",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = ((n+3)/(n+1))ⁿ. Rewrite as ((1 + 2/(n+1))ⁿ and use (1+a/n)ⁿ → eᵃ.",ptype:"conv"},
{n:"25",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (n/(n+1))ⁿ. Rewrite as (1 − 1/(n+1))ⁿ → e^(−1).",ptype:"conv"},
{n:"26",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (2n+3)/(n+1) − (n−1)/(n+2). Combine fractions first.",ptype:"conv"},
{n:"27",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = ∛(n³+n) − n. Factor out n: n(∛(1+1/n²)−1) and use binomial approximation.",ptype:"conv"},
{n:"28",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (−1)ⁿ·n/(n²+1). Check if |aₙ| → 0 using Squeeze Theorem.",ptype:"conv"},
{n:"29",text:"Determine whether the sequence converges or diverges. If it converges find the limit: aₙ = (n² + sin n)/(n² + 1). Use Squeeze Theorem: −1 ≤ sin n ≤ 1.",ptype:"conv"},
{n:"32",text:"Determine whether the sequence converges or diverges: aₙ = n!/3ⁿ. Use ratio test idea: aₙ₊₁/aₙ = (n+1)/3 → ∞ so aₙ → ∞, diverges.",ptype:"conv"},
{n:"33",text:"Determine whether the sequence converges or diverges: aₙ = 3ⁿ/n!. Show aₙ → 0 by bounding: for n > 3, each factor 3/k < 1.",ptype:"conv"},
{n:"34",text:"Determine whether the sequence converges or diverges: aₙ = (2n)!/(n!)². This is C(2n,n) — show it diverges using Stirling's approximation or ratio argument.",ptype:"conv"},
{n:"44",text:"A sequence is defined by a₁=1 and aₙ₊₁ = √(2+aₙ). Use the Monotone Convergence Theorem: show the sequence is bounded above and increasing, then find the limit by solving L = √(2+L).",ptype:"mct"},
{n:"45",text:"A sequence is defined recursively. Use the Monotone Convergence Theorem to show it converges: verify it is monotone (check aₙ₊₁ ≥ aₙ or ≤ aₙ) and bounded, then find the limit by setting L = f(L) and solving.",ptype:"mct"}
]},

{id:"10.2",name:"10.2 Sequences of Functions",test:"t1",ptypes:[
{id:"ptwise",name:"Pointwise convergence"},
{id:"unif",name:"Uniform convergence"}
],questions:[
{n:"1",text:"Find the pointwise limit of fₙ(x) = x/n on (−∞,∞), then determine whether convergence is uniform on (−∞,∞). Compute Mₙ = sup|fₙ(x)−f(x)|.",ptype:"ptwise"},
{n:"2",text:"Find the pointwise limit of fₙ(x) = xⁿ on [0,1], then determine whether convergence is uniform on [0,1]. Check what happens at x=1 separately.",ptype:"ptwise"},
{n:"3",text:"Find the pointwise limit of fₙ(x) = xⁿ(1−x) on [0,1], then determine whether convergence is uniform. Find the maximum of fₙ by differentiation.",ptype:"ptwise"},
{n:"4",text:"Find the pointwise limit of fₙ(x) = nx/(1+n²x²) on (−∞,∞), then determine whether convergence is uniform.",ptype:"ptwise"},
{n:"5",text:"Find the pointwise limit of fₙ(x) = n²x·e^(−nx) on [0,∞), then determine whether convergence is uniform on [0,∞).",ptype:"ptwise"},
{n:"6",text:"Find the pointwise limit of fₙ(x) = 1/(1+nx) on [0,1], then determine whether convergence is uniform. Note f(0) is different from f(x) for x>0.",ptype:"ptwise"},
{n:"7",text:"Find the pointwise limit of fₙ(x) = sin(nx)/n on (−∞,∞), then determine whether convergence is uniform. Use |sin(nx)| ≤ 1.",ptype:"unif"},
{n:"8",text:"Find the pointwise limit of fₙ(x) = x²/(x²+(1−nx)²) on [0,1], then determine whether convergence is uniform.",ptype:"ptwise"},
{n:"9",text:"Find the pointwise limit of fₙ(x) = nx/(1+nx) on [0,∞), then determine whether convergence is uniform on [0,∞) and on [a,∞) for a>0.",ptype:"ptwise"},
{n:"10",text:"Find the pointwise limit of fₙ(x) = cos(x/n) on (−∞,∞), then determine whether convergence is uniform.",ptype:"unif"},
{n:"11",text:"Find the pointwise limit of fₙ(x) = n·x·e^(−nx²) on (−∞,∞), then determine whether convergence is uniform. Find max of fₙ by setting fₙ'=0.",ptype:"ptwise"},
{n:"12",text:"Find the pointwise limit of fₙ(x) = (sin x)/n on (−∞,∞), then determine whether convergence is uniform.",ptype:"unif"},
{n:"13",text:"Find the pointwise limit of fₙ(x) = x^(1/n) on [1,∞), then determine whether convergence is uniform on [1,∞).",ptype:"unif"},
{n:"14",text:"Find the pointwise limit of fₙ(x) = (x/n)e^(−x/n) on [0,∞), then determine whether convergence is uniform.",ptype:"ptwise"},
{n:"15",text:"Find the pointwise limit of fₙ(x) = arctan(nx) on (−∞,∞), then determine whether convergence is uniform. The limit function has a jump discontinuity at x=0.",ptype:"ptwise"}
]},

{id:"10.4",name:"10.4 Power Series",test:"t1",ptypes:[
{id:"roc",name:"Radius & interval of convergence"},
{id:"diffint",name:"Differentiate or integrate a power series"}
],questions:[
{n:"1",text:"Find the radius and interval of convergence: Σ xⁿ/n. Apply Ratio Test to find R=1, then check endpoints x=1 (harmonic series) and x=−1 (alternating harmonic series).",ptype:"roc"},
{n:"2",text:"Find the radius and interval of convergence: Σ xⁿ/n². Apply Ratio Test for R=1, check endpoints using p-series with p=2.",ptype:"roc"},
{n:"3",text:"Find the radius and interval of convergence: Σ nxⁿ. Apply Ratio Test: lim|aₙ₊₁/aₙ| = |x|·lim(n+1)/n = |x|. R=1, check endpoints.",ptype:"roc"},
{n:"4",text:"Find the radius and interval of convergence: Σ xⁿ/n!. Apply Ratio Test: lim|x/(n+1)| = 0 for all x. R=∞.",ptype:"roc"},
{n:"5",text:"Find the radius and interval of convergence: Σ n!xⁿ. Apply Ratio Test: lim|(n+1)x| = ∞ for x≠0. R=0, converges only at x=0.",ptype:"roc"},
{n:"6",text:"Find the radius and interval of convergence: Σ (2x)ⁿ/n. Factor out 2ⁿ: this is Σ 2ⁿxⁿ/n. R=1/2. Check endpoints x=1/2 and x=−1/2.",ptype:"roc"},
{n:"7",text:"Find the radius and interval of convergence: Σ (x−2)ⁿ/3ⁿ. This is a geometric-type series centred at x=2. R=3. Check endpoints x=5 and x=−1.",ptype:"roc"},
{n:"8",text:"Find the radius and interval of convergence: Σ n(x+1)ⁿ/4ⁿ. Centred at x=−1. Apply Ratio Test to find R=4. Check endpoints.",ptype:"roc"},
{n:"9",text:"Find the radius and interval of convergence: Σ (−1)ⁿxⁿ/√n. Apply Ratio Test for R=1, then use AST and p-series to check endpoints x=1 and x=−1.",ptype:"roc"},
{n:"10",text:"Find the radius and interval of convergence: Σ x^(2n)/n. Substitute u=x² so this looks like Σ uⁿ/n with R_u=1, so R_x=1. Check endpoints x=±1.",ptype:"roc"},
{n:"11",text:"Find the radius and interval of convergence: Σ (2n)!x^(2n)/((n!)²). Use Ratio Test with the (2n)! and (n!)² terms — ratio simplifies using factorial reduction.",ptype:"roc"},
{n:"12",text:"Find the radius and interval of convergence: Σ n²xⁿ/2ⁿ. Apply Ratio Test: lim|(n+1)²/n² · x/2| = |x|/2. R=2. Check endpoints x=±2.",ptype:"roc"},
{n:"13",text:"Find the radius and interval of convergence: Σ xⁿ/(n·2ⁿ). Apply Ratio Test: lim|n/(n+1) · x/2| = |x|/2. R=2. Check endpoints using harmonic/alternating harmonic.",ptype:"roc"},
{n:"14",text:"Find the radius and interval of convergence: Σ (3x−1)ⁿ/n³. Centred at x=1/3. R=1/3 from Ratio Test. Check endpoints using p-series p=3.",ptype:"roc"},
{n:"15",text:"Find the radius and interval of convergence: Σ (−1)ⁿ(x−3)ⁿ/(n+1). Centred at x=3. R=1. Check both endpoints.",ptype:"roc"},
{n:"16",text:"Find the radius and interval of convergence: Σ n²(x+2)ⁿ/3ⁿ. Centred at x=−2. R=3. At endpoints apply divergence test.",ptype:"roc"},
{n:"17",text:"Find the radius and interval of convergence: Σ (x/2)ⁿ·(1/√n). R=2. Check endpoints with p-series (p=1/2 diverges) and AST.",ptype:"roc"},
{n:"18",text:"Find the radius and interval of convergence: Σ (−1)ⁿx^(2n+1)/(2n+1). This is the arctan series. R=1. Check endpoints: both converge by AST.",ptype:"roc"},
{n:"19",text:"Find the radius and interval of convergence: Σ (n+1)(x−1)ⁿ/2ⁿ. Centred at x=1. Apply Ratio Test to get R=2. Check endpoints.",ptype:"roc"},
{n:"20",text:"Find the radius and interval of convergence: Σ xⁿ·ln(n)/n. Apply Ratio Test; R=1. At x=1: diverges by comparison with 1/n. At x=−1: converges by AST.",ptype:"roc"},
{n:"21",text:"Find the radius and interval of convergence: Σ (2n choose n)xⁿ. Use Ratio Test with (2n choose n) = (2n)!/((n!)²). Ratio → 4|x|. R=1/4.",ptype:"roc"},
{n:"22",text:"Find the radius and interval of convergence: Σ (x+3)ⁿ/(n·5ⁿ). Centred at x=−3. R=5. Check endpoints using harmonic and alternating harmonic series.",ptype:"roc"},
{n:"23",text:"Find the radius and interval of convergence: Σ n!(x−2)ⁿ/(2n)!. Apply Ratio Test: ratio → |x−2|/4. R=4 centred at x=2.",ptype:"roc"},
{n:"24",text:"Find the radius and interval of convergence: Σ (sin n)xⁿ. Apply Root Test: lim sup|sin n|^(1/n) = 1. R=1. Endpoint check: |sin n| does not go to 0, diverges at both.",ptype:"roc"},
{n:"25",text:"Find the radius and interval of convergence: Σ (3ⁿ + (−2)ⁿ)xⁿ. Factor: largest coefficient grows like 3ⁿ. R=1/3.",ptype:"roc"},
{n:"26",text:"Find the radius and interval of convergence: Σ (x−1)^(2n)/9ⁿ. Let u=(x−1)², this is Σ (u/9)ⁿ which converges when |u|<9, i.e. |x−1|<3. R=3.",ptype:"roc"},
{n:"27",text:"Find the radius and interval of convergence: Σ (−4)ⁿ(x+2)^(2n)/n. Substitute u=(x+2)², series is Σ (−4)ⁿuⁿ/n = Σ(−4u)ⁿ/n. Converges when |−4u|<1, so |x+2|<1/2.",ptype:"roc"},
{n:"28",text:"Find the radius and interval of convergence: Σ n^n·xⁿ. Apply Root Test: lim n^(n·1/n)·|x| = lim n·|x| = ∞ unless x=0. R=0.",ptype:"roc"},
{n:"29",text:"Find the radius and interval of convergence: Σ (ln n)xⁿ. Apply Root Test: lim(ln n)^(1/n) = 1. R=1. At endpoints: ln n → ∞ so diverges.",ptype:"roc"},
{n:"30",text:"Find the radius and interval of convergence: Σ (x−a)ⁿ/bⁿ for constants a, b with b>0. This is geometric centred at x=a with R=|b|. Converges for |x−a|<b.",ptype:"roc"},
{n:"31",text:"Given the power series Σ cₙxⁿ has R=3, find the radius of convergence of Σ cₙx^(2n). Substitute u=x²: converges when |u|<3, i.e. |x|<√3. New R=√3.",ptype:"roc"},
{n:"32",text:"Given the power series Σ cₙxⁿ has R=3, find the radius of convergence of Σ cₙ(x−2)ⁿ. The radius of convergence is unchanged at R=3 — only the centre shifts.",ptype:"roc"},
{n:"33",text:"Given the power series Σ cₙxⁿ has R=3, find the radius of convergence of Σ n·cₙxⁿ. Differentiation does not change the radius: R=3.",ptype:"diffint"},
{n:"34",text:"Given the power series Σ cₙxⁿ has R=3, find the radius of convergence of Σ cₙxⁿ/n. Integration does not change the radius: R=3.",ptype:"diffint"},
{n:"35",text:"Given the power series Σ cₙxⁿ has R=3, find the radius of convergence of Σ cₙ2ⁿxⁿ = Σ cₙ(2x)ⁿ. Replace x by 2x: converges when |2x|<3, so R=3/2.",ptype:"roc"},
{n:"36",text:"Differentiate the power series f(x)=Σ xⁿ/n! term-by-term to verify f'(x) = f(x). This confirms the series represents eˣ.",ptype:"diffint"},
{n:"37",text:"Integrate the power series Σ (−1)ⁿx^(2n)/(2n)! term-by-term from 0 to x to find a series for sinx. Verify the result matches the known Maclaurin series.",ptype:"diffint"}
]},

{id:"10.6",name:"10.6 Sums of Power Series",test:"t1",ptypes:[
{id:"closed",name:"Closed-form sum from known series"},
{id:"numeval",name:"Evaluate a numerical series"}
],questions:[
{n:"1",text:"Find the sum of Σ xⁿ·n for |x|<1. Start from 1/(1−x)=Σxⁿ, differentiate both sides: 1/(1−x)² = Σ n·xⁿ⁻¹, then multiply by x.",ptype:"closed"},
{n:"2",text:"Find the sum of Σ n·xⁿ⁻¹ for |x|<1. Differentiate 1/(1−x)=Σxⁿ directly: d/dx[1/(1−x)] = 1/(1−x)² = Σ n·xⁿ⁻¹.",ptype:"closed"},
{n:"3",text:"Find the sum of Σ xⁿ/n for |x|<1 and x=−1. Integrate 1/(1−x)=Σxⁿ term-by-term from 0 to x: −ln(1−x) = Σ xⁿ/n. At x=−1: Σ(−1)ⁿ/n = −ln2.",ptype:"closed"},
{n:"4",text:"Find the sum of Σ (−1)ⁿx^(2n+1)/(2n+1). Recognize this as the arctan series. Sum = arctan(x) for |x|≤1.",ptype:"closed"},
{n:"5",text:"Find the sum of Σ (−1)ⁿ/(2n+1). This is the arctan series evaluated at x=1: arctan(1) = π/4.",ptype:"numeval"},
{n:"6",text:"Find the sum of Σ (−1)ⁿx^(2n)/(2n)!. Recognize this as the Maclaurin series for cosx. Sum = cosx.",ptype:"closed"},
{n:"7",text:"Find the sum of Σ x^(2n+1)/(2n+1)!. This is the sinh series: sinhx = Σ x^(2n+1)/(2n+1)!. Or verify by comparing with eˣ and e^(−x).",ptype:"closed"},
{n:"8",text:"Find the sum of Σ n(n−1)xⁿ for |x|<1. Differentiate 1/(1−x)² = Σ n·xⁿ⁻¹ to get 2/(1−x)³ = Σ n(n−1)xⁿ⁻², then multiply by x².",ptype:"closed"},
{n:"9",text:"Find the sum of Σ xⁿ/(n(n+1)). Use partial fractions: 1/(n(n+1)) = 1/n − 1/(n+1). Then Σ xⁿ/n − Σ xⁿ/(n+1) = −ln(1−x) − (−ln(1−x)/x + ...). Work carefully with the two known series.",ptype:"closed"},
{n:"10",text:"Find the sum of Σ (−1)ⁿx^(2n) for |x|<1. This is a geometric series in u=−x²: Σ(−x²)ⁿ = 1/(1+x²).",ptype:"closed"},
{n:"11",text:"Find the numerical sum Σ (−1)ⁿ/n·(1/2)ⁿ. This is the ln series evaluated at x=1/2: Σ(−1)ⁿ⁺¹(1/2)ⁿ/n = ln(1+1/2) = ln(3/2)... check sign convention carefully.",ptype:"numeval"},
{n:"12",text:"Find the sum of Σ (2x)ⁿ/n for |x|<1/2. This is −ln(1−2x) by recognizing Σ uⁿ/n = −ln(1−u) with u=2x.",ptype:"closed"},
{n:"13",text:"Find the sum of Σ n²xⁿ for |x|<1. Start from Σ nxⁿ = x/(1−x)², differentiate to get Σ n²xⁿ⁻¹ = (1+x)/(1−x)³, then multiply by x: Σ n²xⁿ = x(1+x)/(1−x)³.",ptype:"closed"},
{n:"14",text:"Find the sum of Σ (−1)ⁿ·3^(2n+1)/(2n+1) · (1/π)^(2n+1). This is the arctan series evaluated at x=3/π: sum = arctan(3/π).",ptype:"numeval"},
{n:"15",text:"Find the sum of Σ (n+1)xⁿ for |x|<1. Write n+1 = d/dx[xⁿ⁺¹], or note Σ(n+1)xⁿ = d/dx[Σ xⁿ⁺¹] = d/dx[x/(1−x)] = 1/(1−x)².",ptype:"closed"}
]},

{id:"10.8",name:"10.8 Taylor Series — Binomial",test:"t1",ptypes:[
{id:"binom",name:"Binomial series expansion"}
],questions:[
{n:"1",text:"Use the binomial series to expand 1/√(1+x) = (1+x)^(−1/2) as a power series. Write out the first four terms and give the general term. Converges for |x|<1.",ptype:"binom"},
{n:"2",text:"Use the binomial series to expand √(1+x) = (1+x)^(1/2) as a power series. Write out the first four terms. Converges for |x|<1.",ptype:"binom"},
{n:"3",text:"Use the binomial series to expand 1/(1+x)² = (1+x)^(−2). Write the general term C(−2,n)·xⁿ. Simplify: C(−2,n) = (−1)ⁿ(n+1). Converges for |x|<1.",ptype:"binom"},
{n:"4",text:"Use the binomial series to expand (1−x²)^(1/2). Substitute −x² for x in the √(1+x) series. State the interval of convergence.",ptype:"binom"},
{n:"5",text:"Use the binomial series to expand 1/√(4+x). First factor: 1/√(4+x) = (1/2)·(1+x/4)^(−1/2). Then apply the binomial series with x replaced by x/4. State the interval of convergence.",ptype:"binom"}
]},

{id:"10.9",name:"10.9 Infinite Series — Convergence Tests",test:"t1",ptypes:[
{id:"geom",name:"Geometric series & p-series"},
{id:"div",name:"Divergence test"},
{id:"comp",name:"Comparison & Limit Comparison"},
{id:"ratio",name:"Ratio & Root tests"},
{id:"inttest",name:"Integral test"}
],questions:[
{n:"1",text:"Determine convergence or divergence: Σ 1/n². Identify as p-series with p=2>1. Converges.",ptype:"geom"},
{n:"2",text:"Determine convergence or divergence: Σ 1/√n = Σ n^(−1/2). p-series with p=1/2<1. Diverges.",ptype:"geom"},
{n:"3",text:"Determine convergence or divergence: Σ (2/3)ⁿ. Geometric series with r=2/3, |r|<1. Converges to 1/(1−2/3)=3.",ptype:"geom"},
{n:"4",text:"Determine convergence or divergence: Σ 3ⁿ/4ⁿ = Σ (3/4)ⁿ. Geometric with r=3/4. Converges.",ptype:"geom"},
{n:"5",text:"Determine convergence or divergence: Σ n/(n+1). Divergence test: lim n/(n+1) = 1 ≠ 0. Diverges.",ptype:"div"},
{n:"6",text:"Determine convergence or divergence: Σ 1/(n(n+1)). Use partial fractions: 1/(n(n+1)) = 1/n − 1/(n+1). This is a telescoping series. Converges to 1.",ptype:"geom"},
{n:"7",text:"Determine convergence or divergence: Σ n/(n²+1). Compare with 1/n: use Limit Comparison with bₙ=1/n. L = lim n²/(n²+1) = 1. Since Σ1/n diverges, this diverges.",ptype:"comp"},
{n:"8",text:"Determine convergence or divergence: Σ 1/(n²+1). Compare with 1/n². Limit Comparison: L = lim n²/(n²+1) = 1. Since Σ1/n² converges (p=2), this converges.",ptype:"comp"},
{n:"9",text:"Determine convergence or divergence: Σ sin(1/n). Limit Comparison with 1/n: lim sin(1/n)/(1/n) = 1. Since Σ1/n diverges, Σ sin(1/n) diverges.",ptype:"comp"},
{n:"10",text:"Determine convergence or divergence: Σ n!/(2n)!. Ratio Test: aₙ₊₁/aₙ = (n+1)!/((2n+2)!) · (2n)!/n! = (n+1)/((2n+2)(2n+1)) → 0. Converges.",ptype:"ratio"},
{n:"11",text:"Determine convergence or divergence: Σ nⁿ/n!. Ratio Test: aₙ₊₁/aₙ = (n+1)^(n+1)/((n+1)!) · n!/nⁿ = ((n+1)/n)ⁿ → e > 1. Diverges.",ptype:"ratio"},
{n:"12",text:"Determine convergence or divergence: Σ n²/2ⁿ. Ratio Test: (n+1)²/2^(n+1) · 2ⁿ/n² = (n+1)²/(2n²) → 1/2 < 1. Converges.",ptype:"ratio"},
{n:"13",text:"Determine convergence or divergence: Σ (n/(n+1))ⁿ. Divergence test: lim(n/(n+1))ⁿ = lim(1−1/(n+1))ⁿ = e^(−1) ≠ 0. Diverges.",ptype:"div"},
{n:"14",text:"Determine convergence or divergence: Σ 1/(n·ln n). Integral test: ∫ dx/(x ln x) = ln(ln x). This diverges as x→∞. Series diverges.",ptype:"inttest"},
{n:"15",text:"Determine convergence or divergence: Σ 1/(n(ln n)²). Integral test: ∫ dx/(x(ln x)²) = −1/ln x. Converges. Series converges.",ptype:"inttest"},
{n:"16",text:"Determine convergence or divergence: Σ arctan(n)/(n²+1). Integral test: ∫ arctan(x)/(x²+1)dx = (arctan x)²/2. Converges. Series converges.",ptype:"inttest"},
{n:"17",text:"Determine convergence or divergence: Σ ne^(−n). Integral test: ∫ xe^(−x)dx converges (integration by parts). Series converges. Or use Ratio Test: ratio → e^(−1) < 1.",ptype:"inttest"},
{n:"18",text:"Determine convergence or divergence: Σ 1/(2n−1) = 1 + 1/3 + 1/5 + ... Limit Comparison with 1/n: L=2. Since Σ1/n diverges, this diverges.",ptype:"comp"},
{n:"19",text:"Determine convergence or divergence: Σ (1+1/n)ⁿ. Divergence test: lim(1+1/n)ⁿ = e ≠ 0. Diverges.",ptype:"div"},
{n:"20",text:"Determine convergence or divergence: Σ 1/(n+√n). Direct comparison: 1/(n+√n) < 1/n but 1/n diverges (wrong direction). Use Limit Comparison with 1/n: L=1. Diverges.",ptype:"comp"},
{n:"21",text:"Determine convergence or divergence: Σ (−1)ⁿ·n². Divergence test: lim n² = ∞ ≠ 0. Diverges.",ptype:"div"},
{n:"22",text:"Determine convergence or divergence: Σ cos(nπ)/n = Σ (−1)ⁿ/n. This is the alternating harmonic series — use AST or note this is a specific case of alternating series. Converges conditionally.",ptype:"comp"},
{n:"29",text:"Determine convergence or divergence using the Ratio Test: Σ n³/3ⁿ. Ratio: (n+1)³/3^(n+1) · 3ⁿ/n³ = (1+1/n)³/3 → 1/3 < 1. Converges.",ptype:"ratio"},
{n:"30",text:"Determine convergence or divergence using the Ratio Test: Σ (2n)!/((n!)²·4ⁿ). Ratio: (2n+2)!/((n+1)!)²/4^(n+1) · ((n!)²·4ⁿ)/(2n)! = (2n+1)(2n+2)/((n+1)²·4) = (4n²+6n+2)/(4n²+8n+4) → 1. Ratio Test inconclusive; try Stirling.",ptype:"ratio"},
{n:"31",text:"Determine convergence or divergence using the Ratio Test: Σ 2ⁿ·n!/nⁿ. Ratio: 2^(n+1)(n+1)!/(n+1)^(n+1) · nⁿ/(2ⁿ·n!) = 2(n+1)·nⁿ/(n+1)^(n+1) = 2·(n/(n+1))ⁿ = 2·(1−1/(n+1))ⁿ → 2/e < 1. Converges.",ptype:"ratio"},
{n:"32",text:"Determine convergence or divergence using the Root Test: Σ (n/(n+1))^(n²). Root Test: lim[(n/(n+1))^(n²)]^(1/n) = lim(n/(n+1))ⁿ = lim(1−1/(n+1))ⁿ = e^(−1) < 1. Converges.",ptype:"ratio"}
]},

{id:"10.10",name:"10.10 Absolute & Conditional Convergence",test:"t1",ptypes:[
{id:"abscon",name:"Classify: absolutely convergent, conditionally convergent, or divergent"},
{id:"altseries",name:"Alternating Series Test + error estimate"}
],questions:[
{n:"1",text:"Classify Σ (−1)ⁿ/n: test Σ|aₙ|=Σ1/n (diverges — harmonic). Apply AST: 1/n decreasing, →0. Conditionally convergent.",ptype:"abscon"},
{n:"2",text:"Classify Σ (−1)ⁿ/n²: test Σ|aₙ|=Σ1/n² (p-series p=2, converges). Absolutely convergent.",ptype:"abscon"},
{n:"3",text:"Classify Σ (−1)ⁿ·n/(n²+1): test Σ|aₙ| — Limit Comparison with 1/n shows diverges. Apply AST: check aₙ=n/(n²+1) is decreasing (differentiate) and →0. Conditionally convergent.",ptype:"abscon"},
{n:"4",text:"Classify Σ (−1)ⁿ/√n: Σ|aₙ|=Σn^(−1/2), p=1/2<1, diverges. AST: 1/√n decreasing →0. Conditionally convergent.",ptype:"abscon"},
{n:"5",text:"Classify Σ (−1)ⁿn!/(2n)!: Ratio Test on Σ|aₙ|: ratio→0<1. Absolutely convergent.",ptype:"abscon"},
{n:"6",text:"Classify Σ (−1)ⁿ·n²/2ⁿ: Ratio Test on Σ|aₙ|: ratio→1/2<1. Absolutely convergent.",ptype:"abscon"},
{n:"7",text:"Classify Σ sin(n)/n²: Σ|sin(n)/n²| ≤ Σ1/n² which converges. Absolutely convergent by comparison.",ptype:"abscon"},
{n:"8",text:"Classify Σ (−1)ⁿ(√(n+1)−√n): note √(n+1)−√n = 1/(√(n+1)+√n) ~ 1/(2√n). Σ|aₙ|~Σ1/(2√n) diverges. AST: check decreasing and →0. Conditionally convergent.",ptype:"altseries"},
{n:"9",text:"Use the Alternating Series Estimation: how many terms of Σ (−1)ⁿ⁺¹/n are needed to approximate the sum within 0.01? Need aₙ = 1/n ≤ 0.01, so n ≥ 100. At least 100 terms.",ptype:"altseries"},
{n:"10",text:"Use the Alternating Series Estimation: how many terms of Σ (−1)ⁿ/n! are needed to approximate the sum (= 1/e − 1) within 0.001? Error ≤ aₙ₊₁ = 1/(n+1)!. Try n=6: 1/7! ≈ 0.0002 < 0.001. Six terms suffice.",ptype:"altseries"},
{n:"11",text:"Classify Σ cos(nπ)/(n ln n) = Σ(−1)ⁿ/(n ln n) for n≥2: Σ|aₙ|=Σ1/(n ln n) diverges (integral test). AST: 1/(n ln n) decreasing →0. Conditionally convergent.",ptype:"abscon"},
{n:"12",text:"Classify Σ (−1)ⁿ·(2/3)ⁿ: geometric with |r|=2/3<1. Σ|aₙ|=Σ(2/3)ⁿ converges. Absolutely convergent.",ptype:"abscon"}
]},

{id:"10.11",name:"10.11 Power Series & Differentiation/Integration",test:"t1",ptypes:[
{id:"manip",name:"Express a function as a power series"}
],questions:[
{n:"1",text:"Find a power series representation for 1/(1+x). Start from 1/(1−x)=Σxⁿ; substitute −x: 1/(1+x) = Σ(−1)ⁿxⁿ for |x|<1.",ptype:"manip"},
{n:"2",text:"Find a power series representation for 1/(1−x)². Differentiate 1/(1−x)=Σxⁿ: 1/(1−x)² = Σ n·xⁿ⁻¹ = Σ(n+1)xⁿ for |x|<1.",ptype:"manip"},
{n:"3",text:"Find a power series representation for ln(1+x). Integrate 1/(1+x)=Σ(−1)ⁿxⁿ from 0 to x: ln(1+x) = Σ(−1)ⁿxⁿ⁺¹/(n+1) for |x|≤1 (x≠−1).",ptype:"manip"},
{n:"4",text:"Find a power series representation for arctan(x). Integrate 1/(1+x²)=Σ(−1)ⁿx^(2n) from 0 to x: arctan(x) = Σ(−1)ⁿx^(2n+1)/(2n+1) for |x|≤1.",ptype:"manip"},
{n:"5",text:"Find a power series representation for x/(1+x²). Start from 1/(1+x²)=Σ(−1)ⁿx^(2n), multiply by x: x/(1+x²) = Σ(−1)ⁿx^(2n+1) for |x|<1.",ptype:"manip"},
{n:"6",text:"Find a power series representation for ln(1−x). Integrate −1/(1−x)=−Σxⁿ: ln(1−x) = −Σxⁿ⁺¹/(n+1) = −Σxⁿ/n (starting n=1) for |x|<1.",ptype:"manip"},
{n:"7",text:"Find a power series representation for x²/(1−x³). Let u=x³: 1/(1−u)=Σuⁿ, so 1/(1−x³)=Σx^(3n). Multiply by x²: x²/(1−x³)=Σx^(3n+2) for |x|<1.",ptype:"manip"},
{n:"8",text:"Find a power series for ∫₀ˣ sin(t²)/t dt (the Fresnel integral). Write sin(t²)=Σ(−1)ⁿt^(4n+2)/(2n+1)!, divide by t, integrate: Σ(−1)ⁿx^(4n+2)/((4n+2)(2n+1)!).",ptype:"manip"}
]},

{id:"10.12",name:"10.12 Taylor & Maclaurin Series",test:"t1",ptypes:[
{id:"maclaurin",name:"Maclaurin series (centred at 0)"},
{id:"taylor",name:"Taylor series at x = a"},
{id:"buildnew",name:"Build series via substitution into known series"}
],questions:[
{n:"1",text:"Find the Maclaurin series for f(x)=eˣ. Compute all derivatives: f⁽ⁿ⁾(0)=1. Series: Σ xⁿ/n!. Radius of convergence: R=∞.",ptype:"maclaurin"},
{n:"2",text:"Find the Maclaurin series for f(x)=sinx. Derivatives cycle: sin,cos,−sin,−cos,... f⁽ⁿ⁾(0) = 0,1,0,−1,... Series: Σ(−1)ⁿx^(2n+1)/(2n+1)!. R=∞.",ptype:"maclaurin"},
{n:"3",text:"Find the Maclaurin series for f(x)=cosx. Similar to sinx: Series: Σ(−1)ⁿx^(2n)/(2n)!. R=∞.",ptype:"maclaurin"},
{n:"4",text:"Find the Maclaurin series for f(x)=ln(1+x). f'(x)=1/(1+x), successive derivatives give (−1)ⁿ⁻¹(n−1)!/(1+x)ⁿ. At x=0: f⁽ⁿ⁾(0)=(−1)ⁿ⁻¹(n−1)!. Series: Σ(−1)ⁿ⁻¹xⁿ/n. R=1.",ptype:"maclaurin"},
{n:"5",text:"Find the Maclaurin series for f(x)=1/(1−x). f⁽ⁿ⁾(x)=n!/(1−x)ⁿ⁺¹, f⁽ⁿ⁾(0)=n!. Series: Σ xⁿ. R=1.",ptype:"maclaurin"},
{n:"6",text:"Find the Maclaurin series for f(x)=arctan(x). f'(x)=1/(1+x²)=Σ(−1)ⁿx^(2n). Integrate: arctan(x)=Σ(−1)ⁿx^(2n+1)/(2n+1). R=1.",ptype:"maclaurin"},
{n:"7",text:"Find the Maclaurin series for f(x)=(1+x)^k for non-integer k (binomial series). f⁽ⁿ⁾(0)=k(k−1)···(k−n+1). Series: Σ C(k,n)xⁿ where C(k,n)=k(k−1)···(k−n+1)/n!. R=1.",ptype:"maclaurin"},
{n:"8",text:"Find the Taylor series for f(x)=eˣ centred at x=1. f⁽ⁿ⁾(x)=eˣ, so f⁽ⁿ⁾(1)=e. Series: Σ e·(x−1)ⁿ/n! = e·Σ(x−1)ⁿ/n!. R=∞.",ptype:"taylor"},
{n:"9",text:"Find the Taylor series for f(x)=sinx centred at x=π/4. Compute f(π/4)=1/√2, f'(π/4)=1/√2, f''(π/4)=−1/√2, ... Pattern repeats with period 4. Write the series.",ptype:"taylor"},
{n:"10",text:"Find the Taylor series for f(x)=ln(x) centred at x=1. f(1)=0, f'(1)=1, f''(1)=−1, f'''(1)=2, f⁽ⁿ⁾(1)=(−1)ⁿ⁻¹(n−1)!. Series: Σ(−1)ⁿ⁻¹(x−1)ⁿ/n. R=1.",ptype:"taylor"},
{n:"11",text:"Find the Taylor series for f(x)=1/x centred at x=1. f⁽ⁿ⁾(x)=(−1)ⁿ·n!/x^(n+1), f⁽ⁿ⁾(1)=(−1)ⁿ·n!. Series: Σ(−1)ⁿ(x−1)ⁿ. R=1.",ptype:"taylor"},
{n:"12",text:"Find the Taylor series for f(x)=√x centred at x=4. f(4)=2, f'(4)=1/4, f''(4)=−1/64,... Series: 2 + (1/4)(x−4) − (1/64)(x−4)²/2! + ... This is a binomial series in disguise.",ptype:"taylor"},
{n:"13",text:"Use substitution to find the Maclaurin series for e^(x²). In eˣ=Σxⁿ/n! replace x with x²: e^(x²)=Σx^(2n)/n!. R=∞.",ptype:"buildnew"},
{n:"14",text:"Use substitution to find the Maclaurin series for sin(x²). In sinx=Σ(−1)ⁿx^(2n+1)/(2n+1)! replace x with x²: sin(x²)=Σ(−1)ⁿx^(4n+2)/(2n+1)!. R=∞.",ptype:"buildnew"},
{n:"15",text:"Use substitution to find the Maclaurin series for cos(x³). In cosx=Σ(−1)ⁿx^(2n)/(2n)! replace x with x³: cos(x³)=Σ(−1)ⁿx^(6n)/(2n)!. R=∞.",ptype:"buildnew"},
{n:"16",text:"Use substitution to find the Maclaurin series for 1/(1+x²). In 1/(1−x)=Σxⁿ replace x with −x²: 1/(1+x²)=Σ(−1)ⁿx^(2n). R=1.",ptype:"buildnew"},
{n:"17",text:"Use multiplication to find the first four terms of the Maclaurin series for eˣ·sinx. Write out eˣ=1+x+x²/2!+x³/3!+... and sinx=x−x³/3!+... Multiply term-by-term and collect powers.",ptype:"buildnew"},
{n:"18",text:"Use substitution to find the Maclaurin series for x·cos(2x). In cosx=Σ(−1)ⁿx^(2n)/(2n)! replace x with 2x: cos(2x)=Σ(−1)ⁿ(2x)^(2n)/(2n)!=Σ(−1)ⁿ4ⁿx^(2n)/(2n)!. Multiply by x.",ptype:"buildnew"},
{n:"19",text:"Find the Maclaurin series for sinh(x) = (eˣ−e^(−x))/2. Subtract the series for e^(−x) from eˣ and divide by 2: sinh(x)=Σ x^(2n+1)/(2n+1)!. R=∞.",ptype:"buildnew"},
{n:"20",text:"Find the Maclaurin series for cosh(x) = (eˣ+e^(−x))/2. Add the series for eˣ and e^(−x) and divide by 2: cosh(x)=Σ x^(2n)/(2n)!. R=∞.",ptype:"buildnew"}
]},

{id:"10.13",name:"10.13 Remainder / Error (pp. 683–685)",test:"t1",ptypes:[
{id:"lagrange",name:"Lagrange Remainder Theorem"}
],questions:[
{n:"1",text:"Use the Lagrange Remainder to bound the error when approximating e by the nth Taylor polynomial of eˣ at x=1. |Rₙ(1)| ≤ M·1^(n+1)/(n+1)! where M=e<3. Find the smallest n so that 3/(n+1)! < 0.001.",ptype:"lagrange"},
{n:"2",text:"How many terms of the Maclaurin series for sinx are needed to approximate sin(0.5) with error less than 0.0001? Use |Rₙ| ≤ (0.5)^(n+1)/(n+1)!. Try successive values of n until bound < 0.0001.",ptype:"lagrange"},
{n:"3",text:"Approximate cos(0.2) using a Taylor polynomial and bound the error using the Lagrange Remainder. |cos⁽ⁿ⁺¹⁾(t)| ≤ 1 for all t, so |Rₙ| ≤ (0.2)^(n+1)/(n+1)!. Find n so error < 0.00001.",ptype:"lagrange"},
{n:"4",text:"The Lagrange form of the remainder for a Taylor polynomial of degree n centred at a is Rₙ(x) = f⁽ⁿ⁺¹⁾(c)·(x−a)^(n+1)/(n+1)! for some c between a and x. Use this to show that the Maclaurin series for eˣ converges to eˣ for all x by showing |Rₙ(x)|→0.",ptype:"lagrange"},
{n:"5",text:"Show that the Maclaurin series for sinx converges to sinx for all x. |Rₙ(x)| ≤ |x|^(n+1)/(n+1)! → 0 for all x since |x|^(n+1)/(n+1)! is a term of the convergent series for e^|x|.",ptype:"lagrange"},
{n:"6",text:"Approximate √(1.1) using a 2nd degree Taylor polynomial centred at x=1 for f(x)=√x. Then use the Lagrange Remainder to bound the error. f'''(x)=3/(8x^(5/2)); on [1,1.1], |f'''(c)| ≤ 3/8. |R₂| ≤ (3/8)·(0.1)³/6.",ptype:"lagrange"},
{n:"7",text:"Use the Taylor polynomial of degree 4 for cosx to approximate cos(π/3) and bound the error. Compare with exact value. Show |R₄| ≤ (π/3)⁵/5! ≈ 0.0004.",ptype:"lagrange"}
]}

]},

{id:"t2",name:"Test 2",date:"Mar 3",color:"#1D9E75",sections:[
{id:"10.3",name:"10.3 Taylor Polynomials & Remainders",test:"t2",ptypes:[
{id:"tpoly",name:"Construct nth-degree Taylor polynomial"},
{id:"terror",name:"Bound the error / remainder"}
],questions:[
{n:"1–15",text:"Find the degree-n Taylor polynomial Pₙ(x) for f(x) centred at x = a. Compute f(a), f'(a), ..., f⁽ⁿ⁾(a). Write Pₙ(x) = Σₖ₌₀ⁿ f⁽ᵏ⁾(a)/k! · (x−a)ᵏ. Simplify all coefficients.",ptype:"tpoly"},
{n:"Error bound",text:"Find M = max|f⁽ⁿ⁺¹⁾(t)| on the interval between a and x. Then |Rₙ(x)| ≤ M|x−a|ⁿ⁺¹/(n+1)!. For 'how many terms for accuracy ε': solve M|x−a|ⁿ⁺¹/(n+1)! < ε by trying n = 1, 2, 3, ... since no closed-form solution usually exists.",ptype:"terror"}
]},
{id:"10.5",name:"10.5 Taylor Series Expansions",test:"t2",ptypes:[
{id:"subst",name:"Expand via substitution into known series"},
{id:"multdiv",name:"Multiply two series term-by-term"}
],questions:[
{n:"1–7",text:"Find the Maclaurin series by substituting into a known series: eˣ = Σxⁿ/n!, sin x = Σ(−1)ⁿx^(2n+1)/(2n+1)!, cos x = Σ(−1)ⁿx^(2n)/(2n)!, 1/(1−x) = Σxⁿ, (1+x)ᵏ for binomial. Example: e^(x²) → replace x with x² → Σx^(2n)/n!. Scale the interval of convergence.",ptype:"subst"},
{n:"10–35",text:"Find Maclaurin series using substitution, multiplication, or integration of known series. NEVER differentiate from scratch — identify the base series first then transform it. For products like x·sin(x²): write out sin(x²) by substituting x² into sin's series, then multiply every term by x.",ptype:"subst"},
{n:"47–48",text:"Multiply two power series term-by-term: write both series out to sufficient degree (enough to get the required terms), multiply and collect powers of x. The result is the Cauchy product.",ptype:"multdiv"}
]},
{id:"10.7",name:"10.7 Applications of Taylor Series",test:"t2",ptypes:[
{id:"approxint",name:"Approximate a definite integral via series"},
{id:"serieslim",name:"Compute a limit using series"},
{id:"approxval",name:"Approximate a function value to n decimal places"}
],questions:[
{n:"1–30",text:"Three question types in this section: (1) INTEGRALS — replace integrand with its Taylor series, integrate term-by-term, evaluate at bounds to get an alternating series, then sum until the first omitted term < ε. (2) LIMITS — substitute the Taylor series for each function, cancel algebraically, read off the limit without L'Hôpital. (3) APPROXIMATION — use the Taylor polynomial + Lagrange remainder to find how many terms give n decimal places of accuracy.",ptype:"approxint"}
]},
{id:"15.1",name:"15.1 Introduction to DEs",test:"t2",ptypes:[
{id:"verify",name:"Verify a solution / find particular solution with ICs"},
{id:"immint",name:"Immediately integrable DEs"},
{id:"classify",name:"Identify order, linearity, and singular solutions"}
],questions:[
{n:"1",text:"Verify y(x) = 2 + Ce^(−x²) satisfies dy/dx + 2xy = 4x.",ptype:"verify"},
{n:"2",text:"Verify y(x) = x/(1+Cx) satisfies dy/dx = y²/x².",ptype:"verify"},
{n:"3",text:"Verify y(x) = x³/2 + Cx³e^(1/x²) satisfies x³ dy/dx + (2−3x²)y = x³.",ptype:"verify"},
{n:"4",text:"Verify y(x) = C₁sin3x + C₂cos3x satisfies d²y/dx² + 9y = 0.",ptype:"verify"},
{n:"5",text:"Verify y(x) = C₁²e^(2x) + ½C₁eˣ + C₂ satisfies (d²y/dx²)² = 1 + (dy/dx)².",ptype:"verify"},
{n:"6",text:"Verify y(x) = C₁e^(2x)cos(x/√2) + C₂e^(2x)sin(x/√2) satisfies 2d²y/dx² − 8dy/dx + 9y = 0.",ptype:"verify"},
{n:"7",text:"Verify y(x) = C₁cos2x + C₂sin2x + C₃cosx + C₄sinx satisfies d⁴y/dx⁴ + 5d²y/dx² + 4y = 0.",ptype:"verify"},
{n:"8",text:"Verify y(x) = (C₁ + C₂x − x²/4)e^(4x) satisfies 2d²y/dx² − 16dy/dx + 32y = −e^(4x).",ptype:"verify"},
{n:"9",text:"Verify y(x) = C₁cos(2lnx) + C₂sin(2lnx) + 1/4 satisfies x²d²y/dx² + xdy/dx + 4y = 1.",ptype:"verify"},
{n:"10",text:"Verify y(x) = C₁(sinx)/√x + C₂(cosx)/√x satisfies x²d²y/dx² + xdy/dx + (x² − 1/4)y = 0.",ptype:"verify"},
{n:"11",text:"Find the particular solution of y'' + 9y = 0 satisfying y(0) = 1, y'(0) = 6.",ptype:"verify"},
{n:"12",text:"Find the particular solution of y'' + 9y = 0 satisfying y(0) = 2, y(π/2) = 3.",ptype:"verify"},
{n:"13",text:"Find the particular solution of y'' + 9y = 0 satisfying y(π/12) = 0, y'(π/12) = 1.",ptype:"verify"},
{n:"14",text:"Find the particular solution of y'' + 9y = 0 satisfying y(1) = 1, y(2) = 2.",ptype:"verify"},
{n:"15",text:"Find the general solution of dy/dx = 6x² + 2x by direct integration.",ptype:"immint"},
{n:"16",text:"Find the general solution of dy/dx = 1/(9 + x²) by direct integration.",ptype:"immint"},
{n:"17",text:"Find the general solution of d²y/dx² = 2x + eˣ by direct integration.",ptype:"immint"},
{n:"18",text:"Find the general solution of d²y/dx² = x ln x by direct integration.",ptype:"immint"},
{n:"19",text:"Find the general solution of d³y/dx³ = 13x⁵ by direct integration.",ptype:"immint"},
{n:"21",text:"Show y(x) = −(x²+C)⁻¹ is a one-parameter family of solutions of dy/dx = 2xy². Find a singular solution.",ptype:"classify"},
{n:"22",text:"Show y(x) = 1 − (x³+C)⁻¹ is a one-parameter family of solutions of dy/dx = 3x²(y−1)². Find a singular solution.",ptype:"classify"}
]},
{id:"15.2",name:"15.2 Separable Differential Equations",test:"t2",ptypes:[
{id:"sep-gen",name:"General solution — one-parameter family"},
{id:"sep-ivp",name:"IVP — particular solution with initial condition"},
{id:"sep-app",name:"Applied word problems"}
],questions:[
{n:"1",text:"Find the one-parameter family of solutions and identify any singular solutions: y² dx − x² dy = 0.",ptype:"sep-gen"},
{n:"2",text:"Find the one-parameter family of solutions and identify any singular solutions: dy/dx + 2xy = 4x. [Hint: separable after rearranging as dy/dx = 2x(2−y).]",ptype:"sep-gen"},
{n:"3",text:"Find the one-parameter family of solutions and identify any singular solutions: 2xy dx + (x²+1) dy = 0.",ptype:"sep-gen"},
{n:"4",text:"Find the one-parameter family of solutions and identify any singular solutions: dy/dx = 3y + 2.",ptype:"sep-gen"},
{n:"5",text:"Find the one-parameter family of solutions and identify any singular solutions: 3(y²+2)dx = 4y(x−1)dy.",ptype:"sep-gen"},
{n:"6",text:"Find the one-parameter family of solutions and identify any singular solutions: (x²y + x²)dx + (xy² − y²)dy = 0.",ptype:"sep-gen"},
{n:"7",text:"Find the one-parameter family of solutions and identify any singular solutions: dy/dx = −cosy/sinx.",ptype:"sep-gen"},
{n:"8",text:"Find the one-parameter family of solutions and identify any singular solutions: (x²yeˣ − y)dx + xy³ dy = 0.",ptype:"sep-gen"},
{n:"9",text:"Find the one-parameter family of solutions and identify any singular solutions: (x²y²secx tanx + xy²secx)dx + xy³ dy = 0.",ptype:"sep-gen"},
{n:"10",text:"Find the one-parameter family of solutions and identify any singular solutions: dy/dx = (1+y²)/(1+x²).",ptype:"sep-gen"},
{n:"11",text:"Find the particular solution satisfying the initial condition: 2y dx + (x+1)dy = 0, y(1) = 2.",ptype:"sep-ivp"},
{n:"12",text:"Find the particular solution satisfying the initial condition: (xy+y)dx − (xy−x)dy = 0, y(1) = 2.",ptype:"sep-ivp"},
{n:"13",text:"Find the particular solution satisfying the initial condition: dy/dx = e^(x+y), y(0) = 0.",ptype:"sep-ivp"},
{n:"14",text:"Find the particular solution satisfying the initial condition: dy/dx = 2x(1+y²), y(2) = 4.",ptype:"sep-ivp"},
{n:"15",text:"Find the particular solution satisfying the initial condition: dy/dx = sin²y/cos²x, y(0) = π/2.",ptype:"sep-ivp"},
{n:"16",text:"A girl lives 6 km from school. Her speed is always proportional to the square of her distance from school. (a) Find her distance from school at any time. (b) When does she reach school?",ptype:"sep-app"},
{n:"17",text:"Find a one-parameter family of solutions for dy/dx = −(1+y³)/(xy²+x³y²).",ptype:"sep-app"},
{n:"18",text:"Water at 80°C placed in a room at 20°C cools to 60°C in 2 min. Using Newton's law of cooling, find a formula for its temperature as a function of time.",ptype:"sep-app"},
{n:"19",text:"A thermometer reading 23°C is taken outside where temperature is −20°C. The reading drops to 0°C in 4 min. When will it read −19°C?",ptype:"sep-app"},
{n:"20",text:"A drug is used up at a rate proportional to the amount present. If a dose decreases by 5% in the first hour, when does it decrease to one-half its original amount?",ptype:"sep-app"},
{n:"21",text:"Show that N = N₀e^(−kt) + N̄(1−e^(−kt)) solves dN/dt = k(N̄−N), where N₀ is the initial nitrogen level in a deep-sea diver's tissues.",ptype:"sep-app"},
{n:"22",text:"Glucose is administered IV at constant rate R and used by the body at a rate proportional to the amount A₀ present. Find a formula for the amount in the bloodstream at any time.",ptype:"sep-app"},
{n:"23",text:"Find equations for all curves where the normal at any point and the line joining that point to the origin form an isosceles triangle with the x-axis as base.",ptype:"sep-app"},
{n:"24",text:"Substances A and B react: 1g A + 1g B → 2g C, at a rate proportional to the product of amounts of A and B. Initial amounts: 10g A and 15g B. Find a formula for the amount of C at any time.",ptype:"sep-app"},
{n:"25",text:"Repeat Exercise 24 when the initial amounts of A and B are both 10g.",ptype:"sep-app"},
{n:"26",text:"Two spherical containers of radius R connected by a pipe of area a. Flow rate = (a/3)√(2gh). One container initially empty, the other full. How long until the water levels are equal?",ptype:"sep-app"},
{n:"27",text:"A cylindrical tank (radius R, length L) with hemispherical ends, axis horizontal. Water exits at rate 0.6a√(2gh). Find the time for the full tank to empty.",ptype:"sep-app"},
{n:"28",text:"A canal lock 8m by 16m. Water enters at Q = 0.04√(2gh) m³/s. Initial h = 2m; gate opens when h = 2cm. How long until the gate opens?",ptype:"sep-app"},
{n:"29",text:"A cubical container 1m on each side with a slit 20cm high and 1mm wide at the top. How long does the water level take to fall 10cm? Use discharge coefficient c = 0.6.",ptype:"sep-app"},
{n:"30",text:"A pipe of length L connected to a reservoir of depth h. The velocity v satisfies gh = v²/2 + L(dv/dt). Find v as a function of t.",ptype:"sep-app"},
{n:"31",text:"Third-order chemical reactor: dx/dt = k(a−x)(b−x)(c−x). Solve for cases: (a) a=b=c, (b) a=b≠c, (c) a≠b≠c.",ptype:"sep-app"},
{n:"32",text:"Mach number M and cross-section A related by dA/dM = A(M²−1)/[M(((k−1)/2)M²+1)]. Find A in terms of M if A=A₀ when M=1.",ptype:"sep-app"},
{n:"33",text:"Transient free-surface flow: dv/dt = (K/n)(v + H(t)/v). Solve when (a) H(t) is constant, (b) H(t) = qt − nv.",ptype:"sep-app"},
{n:"50",text:"Logistic model: dN/dt = kN(1−N/C). Solve for N(t) when k=1, C=10⁶, N(0)=100.",ptype:"sep-app"}
]},
{id:"15.3",name:"15.3 Linear First-Order DEs",test:"t2",ptypes:[
{id:"lin-gen",name:"General solution — integrating factor method"},
{id:"lin-ivp",name:"IVP — particular solution"},
{id:"lin-app",name:"Applied problems (circuits, mixing, cooling)"}
],questions:[
{n:"1",text:"Find the general solution: dy/dx + 2xy = 4x.",ptype:"lin-gen"},
{n:"2",text:"Find the general solution: dy/dx + (2/x)y = 6x³.",ptype:"lin-gen"},
{n:"3",text:"Find the general solution: (2y−x)dx + dy = 0.",ptype:"lin-gen"},
{n:"4",text:"Find the general solution: dy/dx + y cotx = 5e^(cosx).",ptype:"lin-gen"},
{n:"5",text:"Find the general solution: (x²+2xy)dx + (x²+1)dy = 0.",ptype:"lin-gen"},
{n:"6",text:"Find the general solution: (x+1)dy/dx − 2y = 2(x+1).",ptype:"lin-gen"},
{n:"7",text:"Find the general solution: (1/x)dy/dx − y/x² = 1/x³.",ptype:"lin-gen"},
{n:"8",text:"Find the general solution: (y+e^(2x))dx = dy.",ptype:"lin-gen"},
{n:"9",text:"Find the general solution: dy/dx + y = 2cosx.",ptype:"lin-gen"},
{n:"10",text:"Find the general solution: x³dy/dx + (2−3x²)y = x³.",ptype:"lin-gen"},
{n:"11",text:"Find the general solution: dy/dx + y/(x ln x) = x².",ptype:"lin-gen"},
{n:"12",text:"Find the general solution: (−2y cot2x − 1 + 2x cot2x + 2csc2x)dx + dy = 0.",ptype:"lin-gen"},
{n:"13",text:"Solve the IVP: dy/dx + 3x²y = x², y(1) = 2.",ptype:"lin-ivp"},
{n:"14",text:"Solve the IVP: (−eˣsinx + y)dx + dy = 0, y(0) = −1.",ptype:"lin-ivp"},
{n:"15",text:"Solve the IVP: dy/dx + x³y/(x⁴+1) = x⁷, y(0) = 1.",ptype:"lin-ivp"},
{n:"16",text:"Find a general solution for (y³−x)dy = y dx.",ptype:"lin-gen"},
{n:"18",text:"Bernoulli equation — use substitution z = y^(1−n): dy/dx + y = y²eˣ.",ptype:"lin-gen"},
{n:"19",text:"Bernoulli equation — use substitution z = y^(1−n): dy/dx + y/x = y²x².",ptype:"lin-gen"},
{n:"20",text:"Bernoulli equation — use substitution z = y^(1−n): dy/dx − y + (x²+2x)y² = 0.",ptype:"lin-gen"},
{n:"21",text:"Bernoulli equation — use substitution z = y^(1−n): x dy + y dx = x³y⁵ dx.",ptype:"lin-gen"},
{n:"22",text:"Bernoulli equation — use substitution z = y^(1−n): dy/dx + y tanx = y⁴ sinx.",ptype:"lin-gen"},
{n:"23",text:"Repeat Exercise 22 of §15.2 if glucose is added at a rate R(t) that is a function of time.",ptype:"lin-app"},
{n:"24",text:"A tank has 100L of solution with 4kg of sugar. A mixture with 10g sugar/L is added at 200mL/min; 100mL of well-stirred mixture is removed each minute. Find the amount of sugar as a function of time.",ptype:"lin-app"},
{n:"25",text:"Repeat Exercise 24 if 300mL of mixture is removed each minute.",ptype:"lin-app"},
{n:"26",text:"A tank contains 1000L of water and 5kg of salt. A mixture of 2kg salt per 100L is added at 10mL/s; well-stirred mixture is removed at 5mL/s. Find the amount of salt as a function of time. Draw a graph.",ptype:"lin-app"},
{n:"27",text:"Repeat Exercise 26 if mixture is removed at 10mL/s. What is the limit of salt for long periods?",ptype:"lin-app"},
{n:"28",text:"Repeat Exercise 26 if mixture is removed at 20mL/s.",ptype:"lin-app"},
{n:"29",text:"A room of 100m³ initially contains 0.1% CO₂. Fresh air (0.05% CO₂) flows in at 5m³/min; well-mixed air flows out at the same rate. Find CO₂ as a function of time. What is the limit as t→∞?",ptype:"lin-app"},
{n:"30",text:"A potato at 20°C is placed in an oven set to 200°C; the oven takes 5min to reach 200°C at a constant rate and stays at 200°C after. Find the potato temperature as a function of time using Newton's law of cooling.",ptype:"lin-app"},
{n:"31",text:"Water at 10°C enters a tank at 0.03kg/s. At t=0 the tank reaches capacity (100kg) and a heater turns on at 2000J/s. Find the temperature of the water as a function of time.",ptype:"lin-app"},
{n:"32",text:"Repeat Exercise 31 if the rate water enters is 100/(t+1) kg/s.",ptype:"lin-app"},
{n:"33",text:"Repeat Exercise 31 if the heater supplies q=20t J/s for the first 10 min. Solve for 0≤t≤600.",ptype:"lin-app"},
{n:"34",text:"Repeat Exercise 31 if the incoming water temperature is T₀(t) = 10e^(−t).",ptype:"lin-app"},
{n:"35",text:"RC-circuit step response: RC·dV/dt + V = h(t), V(0)=0. Find V(t) and sketch the graph.",ptype:"lin-app"},
{n:"36",text:"RL-circuit pulse response: (L/R)di/dt + i = I = h(t)−h(t−1), i(0)=0. Find i(t) and sketch.",ptype:"lin-app"},
{n:"37",text:"(a) LR-circuit with E(t)=E₀sin(ωt): solve L·dI/dt + RI = E for I(t) and show it can be written as Ae^(−Rt/L) + (E₀/Z)sin(ωt−φ) where Z=√(R²+ω²L²), φ=arctan(ωL/R). (b) Find A when I(0)=I₀.",ptype:"lin-app"},
{n:"38",text:"(a) RC-circuit with E(t)=E₀sin(ωt): show I(t) = Ae^(−t/(RC)) + (E₀/Z)sin(ωt−φ) where Z=√(R²+1/(ω²C²)), φ=arctan(−1/(ωCR)). (b) Find A when I(0)=I₀.",ptype:"lin-app"}
]},
{id:"15.4",name:"15.4 Second-Order Reducible to Two First-Order",test:"t2",ptypes:[
{id:"depvar",name:"Dependent variable missing: substitute v = y'"},
{id:"indvar",name:"Independent variable missing: substitute y'' = v dv/dy"}
],questions:[
{n:"1",text:"Find the general solution (dependent variable y missing, substitute v=y'): xy'' + y' = 4x.",ptype:"depvar"},
{n:"3",text:"Find the general solution (dependent variable y missing, substitute v=y'): y'' = y' + 2x.",ptype:"depvar"},
{n:"4",text:"Find the general solution (dependent variable y missing, substitute v=y'): x²y'' = (y')².",ptype:"depvar"},
{n:"5",text:"Find the general solution (dependent variable y missing, substitute v=y'): y''sinx + y'cosx = sinx.",ptype:"depvar"},
{n:"2",text:"Find the general solution (independent variable x missing, use y''=v dv/dy): 2yy'' = 1 + (y')².",ptype:"indvar"},
{n:"7",text:"Find the general solution (independent variable x missing, use y''=v dv/dy): y'' + 4y = 0.",ptype:"indvar"},
{n:"8",text:"Find the general solution (independent variable x missing, use y''=v dv/dy): y'' = yy'.",ptype:"indvar"},
{n:"9",text:"Find the general solution (independent variable x missing, use y''=v dv/dy): y'' + (y')² = 1.",ptype:"indvar"},
{n:"10",text:"Find the general solution (independent variable x missing, use y''=v dv/dy): (y'')² = 1 + (y')².",ptype:"indvar"},
{n:"11",text:"A cylindrical cable: insulation temperature satisfies r·d²T/dr² + dT/dr = 0. Find T(r) if T(a)=Tₐ and T(b)=T_b.",ptype:"depvar"},
{n:"12",text:"Repeat Exercise 11 with heat generation: r·d²T/dr² + dT/dr = k. Find T(r).",ptype:"depvar"},
{n:"13",text:"A well penetrates an aquifer: r·d²h/dr² + dh/dr = 0. Find h(r) given h(rw)=hw and h(ri)=hi.",ptype:"depvar"},
{n:"14",text:"A dog at (L,0) spots a rabbit at the origin running in the +y direction at the same speed. Find the path of the dog (pursuit curve).",ptype:"indvar"},
{n:"15",text:"Repeat Exercise 14 if the dog runs twice as fast as the rabbit.",ptype:"indvar"},
{n:"16",text:"A hawk at (L,0) pursues a pigeon at the origin flying at speed v in the +y direction; hawk speed V>v. (a) Show y(x) satisfies the integrodifferential equation. (b) Differentiate to get x·y'' = (v/V)√(1+(y')²). (c) Solve for the pursuit curve. (d) Show the hawk catches the pigeon at distance vVL/(V²−v²) up the y-axis.",ptype:"indvar"}
]}
]},

{id:"t3",name:"Test 3",date:"Mar 24",color:"#D85A30",sections:[
{id:"15.6",name:"15.6 Linear DEs — Theory",test:"t3",ptypes:[
{id:"linop",name:"Linear vs. nonlinear; operator notation"},
{id:"lintest",name:"Wronskian & linear independence"}
],questions:[
{n:"1",text:"Prove or disprove that operator L is linear: L multiplies functions y(x) by 5.",ptype:"linop",solution:"$L(y₁+y₂) = 5(y₁+y₂) = 5y₁+5y₂ = Ly₁+Ly₂$ ✓\n$L(cy₁) = 5(cy₁) = c(5y₁) = cLy₁$ ✓\n>>LINEAR<<"},
{n:"2",text:"Prove or disprove that operator L is linear: L multiplies functions y(x) by 15x.",ptype:"linop",solution:"$L(y₁+y₂) = 15x(y₁+y₂) = 15xy₁+15xy₂ = Ly₁+Ly₂$ ✓\n$L(cy₁) = 15x(cy₁) = c(15xy₁) = cLy₁$ ✓\n>>LINEAR<<"},
{n:"3",text:"Prove or disprove that operator L is linear: L adds the fixed function z(x) to functions y(x).",ptype:"linop",solution:"$L(y₁+y₂) = y₁+y₂+z$, but $Ly₁+Ly₂ = (y₁+z)+(y₂+z) = y₁+y₂+2z ≠ y₁+y₂+z$.\nFails additivity.\n>>NOT LINEAR<<"},
{n:"4",text:"Prove or disprove that operator L is linear: L takes the limit of functions y(x) as x approaches 3.",ptype:"linop",solution:"$lim(y₁+y₂) = lim y₁+lim y₂ = Ly₁+Ly₂$ ✓\n$lim(cy₁) = c·lim y₁ = cLy₁$ ✓\n>>LINEAR<<"},
{n:"5",text:"Prove or disprove that operator L is linear: L takes the limit of functions y(x) as x approaches infinity.",ptype:"linop",solution:"$lim(y₁+y₂) = lim y₁+lim y₂ = Ly₁+Ly₂$ ✓\n$lim(cy₁) = c·lim y₁ = cLy₁$ ✓\n>>LINEAR<<"},
{n:"6",text:"Prove or disprove that operator L is linear: L takes the first derivative of functions y(x) with respect to x.",ptype:"linop",solution:"$(y₁+y₂)' = y₁'+y₂'$ ✓ (sum rule)\n$(cy₁)' = cy₁'$ ✓ (constant multiple rule)\n>>LINEAR<<"},
{n:"7",text:"Prove or disprove that operator L is linear: L takes the third derivative of functions y(x) with respect to x.",ptype:"linop",solution:"Same argument as #6 applied three times: differentiation is always linear.\n>>LINEAR<<"},
{n:"8",text:"Prove or disprove that operator L is linear: L takes the antiderivative of functions y(x) with respect to x.",ptype:"linop",solution:"$∫(y₁+y₂)dx = ∫y₁dx+∫y₂dx = Ly₁+Ly₂$ ✓\n$∫cy₁dx = c∫y₁dx = cLy₁$ ✓\n>>LINEAR<<"},
{n:"9",text:"Prove or disprove that operator L is linear: L takes the definite integral of y(x) from x=−1 to x=4.",ptype:"linop",solution:"$∫₋₁⁴(y₁+y₂)dx = ∫₋₁⁴y₁dx+∫₋₁⁴y₂dx = Ly₁+Ly₂$ ✓\n$∫₋₁⁴cy₁dx = c∫₋₁⁴y₁dx = cLy₁$ ✓\n>>LINEAR<<"},
{n:"10",text:"Prove or disprove that operator L is linear: L takes the cube root of functions y(x).",ptype:"linop",solution:"$L(y₁+y₂) = ∛(y₁+y₂) ≠ ∛y₁+∛y₂$ in general.\nExample: $y₁=y₂=1 → L(1+1)=∛2≈1.26$, but $Ly₁+Ly₂=2$. Fails additivity.\n>>NOT LINEAR<<"},
{n:"11",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: 2x·d²y/dx² + x³y = x² + 5.",ptype:"linop",solution:"No $y²$ or products of $y$ terms.\nOperator form: >>$(2xD²+x³)y = x²+5$<<"},
{n:"12",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: 2x·d²y/dx² + x³y = x² + 5y.",ptype:"linop",solution:"Rearrange: $2xD²y+x³y−5y = x²$.\nOperator form: >>$(2xD²+x³−5)y = x²$<<"},
{n:"13",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: 2x·d²y/dx² + x³y = x² + 5y².",ptype:"linop",solution:"Contains $y²$ term: $5(y₁+y₂)² = 5y₁²+10y₁y₂+5y₂² ≠ 5y₁²+5y₂²$.\nCross term $10y₁y₂$ shows nonlinearity.\n>>NONLINEAR<<"},
{n:"14",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: x·d³y/dx³ + 3x·d²y/dx² − 2dy/dx + y = 10sinx.",ptype:"linop",solution:"All derivatives appear to first power, no products.\nOperator form: >>$(xD³+3xD²−2D+1)y = 10sinx$<<"},
{n:"15",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: x·d³y/dx³ + 3x·d²y/dx² − 2dy/dx + y² = 10sinx.",ptype:"linop",solution:"Contains $y²$ term — same argument as #13.\n>>NONLINEAR<<"},
{n:"16",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: y·d³y/dx³ + 3x·d²y/dx² − 2dy/dx + y = 10sinx.",ptype:"linop",solution:"The term $y·(d³y/dx³)$ is a product of $y$ with its own derivative.\n>>NONLINEAR<<"},
{n:"17",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: y'' − 3y' − 2y = 9sec²x.",ptype:"linop",solution:"All $y$ terms to first power, no products.\nOperator form: >>$(D²−3D−2)y = 9sec²x$<<"},
{n:"18",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: y·y'' + 3y' − 2y = eˣ.",ptype:"linop",solution:"Contains $yy''$ — product of $y$ with $y''$.\n>>NONLINEAR<<"},
{n:"19",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: √(1 + y' + x²) = 4.",ptype:"linop",solution:"$y'$ appears under a square root — cannot be written in linear form.\n>>NONLINEAR<<"},
{n:"20",text:"Determine if the DE is linear or nonlinear; write linear ones in operator notation: y'''' + y'' − y = lnx.",ptype:"linop",solution:"All derivatives to first power, no products.\nOperator form: >>$(D⁴+D²−1)y = lnx$<<"},
{n:"21",text:"The Laplace transform is defined by $L(y) = ∫₀^∞ e⁻ˢᵗ y(t) dt$. Show that L is a linear operator on the set of all functions with a Laplace transform.",ptype:"linop",solution:"$L(y₁+y₂) = ∫₀^∞ e⁻ˢᵗ(y₁+y₂)dt = ∫₀^∞ e⁻ˢᵗy₁dt+∫₀^∞ e⁻ˢᵗy₂dt = Ly₁+Ly₂$ ✓\n$L(cy₁) = ∫₀^∞ e⁻ˢᵗ(cy₁)dt = c∫₀^∞ e⁻ˢᵗy₁dt = cLy₁$ ✓\n>>LINEAR<<"},
{n:"22",text:"The finite Fourier cosine transform is defined by $L(y) = ∫₀^(2π) y(x)cos(nx) dx$. Show that L is a linear operator.",ptype:"linop",solution:"$L(y₁+y₂) = ∫₀^(2π)(y₁+y₂)cos(nx)dx = ∫₀^(2π)y₁cos(nx)dx+∫₀^(2π)y₂cos(nx)dx = Ly₁+Ly₂$ ✓\n$L(cy₁) = ∫₀^(2π)cy₁cos(nx)dx = c∫₀^(2π)y₁cos(nx)dx = cLy₁$ ✓\n>>LINEAR<<"},
{n:"W-11",text:"Use the Wronskian to test linear independence: {1, x, x²} on −∞ < x < ∞.",ptype:"lintest",solution:"$W(1,x,x²) = |1 x x²; 0 1 2x; 0 0 2| = 2 ≠ 0$ for all $x$.\n>>LINEARLY INDEPENDENT<<"},
{n:"W-12",text:"Use the Wronskian to test linear independence: {x, 2x−3x², x²} on −∞ < x < ∞.",ptype:"lintest",solution:"$2x−3x² = 2(x)+(−3)(x²)$ — $y₂$ is a linear combination of $y₁$ and $y₃$, so $W = 0$.\n>>LINEARLY DEPENDENT<<"},
{n:"W-13",text:"Use the Wronskian to test linear independence: {sinx, cosx} on 0 ≤ x ≤ 2π.",ptype:"lintest",solution:"$W(sinx,cosx) = |sinx cosx; cosx −sinx| = −sin²x−cos²x = −1 ≠ 0$.\n>>LINEARLY INDEPENDENT<<"},
{n:"W-14",text:"Use the Wronskian to test linear independence: {x, xeˣ, x²eˣ} on 0 ≤ x ≤ 1.",ptype:"lintest",solution:"$W(x, xeˣ, x²eˣ)$: rows are $\{x, xeˣ, x²eˣ\}$, $\{1, eˣ+xeˣ, 2xeˣ+x²eˣ\}$, $\{0, 2eˣ+xeˣ, 2eˣ+4xeˣ+x²eˣ\}$.\nAfter expansion (factor $xe²ˣ$): $W = xe²ˣ ≠ 0$ for $x∈(0,1]$.\n>>LINEARLY INDEPENDENT<<"},
{n:"W-15",text:"Use the Wronskian to test linear independence: {x sinx, e^(2x)} on −∞ < x < ∞.",ptype:"lintest",solution:"$W = |x sinx, e²ˣ; sinx+x cosx, 2e²ˣ| = e²ˣ(2x sinx−sinx−x cosx) = e²ˣ(sinx(2x−1)−x cosx)$.\nNot identically zero (e.g. at $x=π$: $W=πe²π≠0$).\n>>LINEARLY INDEPENDENT<<"}
]},
{id:"15.7",name:"15.7 Homogeneous Linear DEs",test:"t3",ptypes:[
{id:"superpos",name:"Superposition — write general solution"},
{id:"reduct",name:"Wronskian verification problems"}
],questions:[
{n:"1",text:"Verify $y₁=e²ˣ$, $y₂=e⁻³ˣ$ satisfy $y''+y'−6y=0$. Confirm they are linearly independent. Write the general solution by superposition.",ptype:"superpos",solution:"Verify $y₁$: $4e²ˣ+2e²ˣ−6e²ˣ = 0$ ✓\nVerify $y₂$: $9e⁻³ˣ−3e⁻³ˣ−6e⁻³ˣ = 0$ ✓\nLinearly independent (different exponentials).\n>>$y = C₁e²ˣ+C₂e⁻³ˣ$<<"},
{n:"2",text:"Verify $y₁=cosx$ satisfies $y'+y tanx=0$. Since the DE is first-order linear, one linearly independent solution generates the general solution. Write the general solution.",ptype:"superpos",solution:"Verify $y₁$: $y₁'+y₁tanx = −sinx+cosx·(sinx/cosx) = −sinx+sinx = 0$ ✓\nFirst-order DE → one independent solution gives the general solution.\n>>$y = C₁cosx$<<"},
{n:"3",text:"Verify $y₁=cos2x$, $y₂=sin2x$, $y₃=cosx$, $y₄=sinx$ each satisfy $y''''+5y''+4y=0$. Confirm they are linearly independent. Write the general solution.",ptype:"superpos",solution:"Verify $cos2x$: $(16−20+4)cos2x = 0$ ✓\nVerify $sin2x$: same ✓\nVerify $cosx$: $(1−5+4)cosx = 0$ ✓\nVerify $sinx$: same ✓\nAll four independent (different frequencies).\n>>$y = C₁cos2x+C₂sin2x+C₃cosx+C₄sinx$<<"},
{n:"4",text:"Verify $y₁=3e⁴ˣ$ and $y₂=−2xe⁴ˣ$ satisfy $2y''−16y'+32y=0$. Confirm they are linearly independent. Write the general solution.",ptype:"superpos",solution:"Verify $y₁=3e⁴ˣ$: $2(48)−16(12)+32(3) = 96−192+96 = 0$ ✓\nVerify $y₂=−2xe⁴ˣ$: $y₂'=−2e⁴ˣ−8xe⁴ˣ$, $y₂''=−16e⁴ˣ−32xe⁴ˣ → (−32−64x+32+128x−64x)e⁴ˣ = 0$ ✓\nIndependent ($y₂$ has $x$ factor).\n>>$y = (C₁+C₂x)e⁴ˣ$<<"},
{n:"5",text:"Verify $y₁=10$, $y₂=3eˣ$, $y₃=4e²ˣ$ satisfy $y'''−3y''+2y'=0$. Confirm they are linearly independent. Write the general solution.",ptype:"superpos",solution:"Verify $y₁=10$: $0−0+0 = 0$ ✓\nVerify $y₂=3eˣ$: $(3−9+6)eˣ = 0$ ✓\nVerify $y₃=4e²ˣ$: $32−48+16 = 0$ ✓\nAll independent (constant, $eˣ$, $e²ˣ$).\n>>$y = C₁+C₂eˣ+C₃e²ˣ$<<"},
{n:"6",text:"Verify $y₁=e²ˣcos(x/√2)$, $y₂=e²ˣsin(x/√2)$ satisfy $2y''−8y'+9y=0$. Confirm they are linearly independent. Write the general solution.",ptype:"superpos",solution:"Auxiliary: $2m²−8m+9=0 → m=(8±√(64−72))/4=2±(√2/2)i$.\nVerify $y₁$, $y₂$ by substitution: both give $0$ ✓\nIndependent (cos vs. sin factor).\n>>$y = e²ˣ(C₁cos(x/√2)+C₂sin(x/√2))$<<"},
{n:"7",text:"Verify $y₁=(sinx)/√x$, $y₂=(cosx)/√x$ satisfy $x²y''+xy'+(x²−1/4)y=0$. Confirm they are linearly independent. Write the general solution.",ptype:"superpos",solution:"Bessel's equation of order $1/2$.\nVerify $y₁=(sinx)/√x$: substitute into $x²y''+xy'+(x²−1/4)y → 0$ ✓\nVerify $y₂=(cosx)/√x$: similarly $0$ ✓\nIndependent (sin vs. cos).\n>>$y = (C₁sinx+C₂cosx)/√x$<<"},
{n:"8",text:"Verify $y₁=cos(2lnx)$, $y₂=sin(2lnx)$ satisfy $x²y''+xy'+4y=0$. Confirm they are linearly independent. Write the general solution.",ptype:"superpos",solution:"Euler equation: try $y=xᵐ → m²+4=0 → m=±2i$.\n$x²ⁱ = e²ⁱˡⁿˣ = cos(2lnx)+i sin(2lnx)$ → real/imaginary parts give $y₁$, $y₂$ ✓\nIndependent (cos vs. sin).\n>>$y = C₁cos(2lnx)+C₂sin(2lnx)$<<"},
{n:"9",text:"Show $y₁=−2/(x+1)$ and $y₂=−2/(x+2)$ both satisfy $y''=yy'$. Is $y=y₁+y₂$ a solution? Explain why or why not in terms of linearity.",ptype:"superpos",solution:"Verify $y₁$: $y₁'=2/(x+1)²$, $y₁''=−4/(x+1)³ = y₁·y₁'$ ✓\nVerify $y₂$: similarly ✓\n$y=y₁+y₂$: compute $y''$ and $yy'$ — they are NOT equal.\n$y''=yy'$ is NONLINEAR, so superposition does not apply — sum of two solutions is not a solution."},
{n:"10",text:"Prove that if $y₁,...,yₙ$ are linearly dependent on $I$, then $W(y₁,...,yₙ)≡0$ on $I$. (This shows $W≠0$ at any point implies independence.)",ptype:"reduct",solution:"Linear dependence: $∃ C₁,...,Cₙ$ not all zero s.t. $C₁y₁+...+Cₙyₙ≡0$.\nDifferentiate $n−1$ times → $n$ equations forming a homogeneous linear system with coefficient matrix $W$.\nNon-trivial solution exists → $det(W)=0$, so $W≡0$ on $I$.\nContrapositive: $W≠0$ at any point → linearly independent."},
{n:"11",text:"Use the Wronskian to test linear independence: {1, $x$, $x²$} on $−∞ < x < ∞$.",ptype:"reduct",solution:"$W(1,x,x²) = det[1,x,x²; 0,1,2x; 0,0,2] = 2 ≠ 0$.\n>>LINEARLY INDEPENDENT<<"},
{n:"12",text:"Use the Wronskian to test linear independence: {$x$, $2x−3x²$, $x²$} on $−∞ < x < ∞$.",ptype:"reduct",solution:"$2x−3x² = 2(x)+(−3)(x²)$ → $y₂$ is a linear combination of $y₁$ and $y₃$, so $W=0$.\n>>LINEARLY DEPENDENT<<"},
{n:"13",text:"Use the Wronskian to test linear independence: {$sinx$, $cosx$} on $0 ≤ x ≤ 2π$.",ptype:"reduct",solution:"$W(sinx,cosx) = |sinx,cosx;cosx,−sinx| = −sin²x−cos²x = −1 ≠ 0$.\n>>LINEARLY INDEPENDENT<<"},
{n:"14",text:"Use the Wronskian to test linear independence: {$x$, $xeˣ$, $x²eˣ$} on $0 ≤ x ≤ 1$.",ptype:"reduct",solution:"Compute $3×3$ Wronskian determinant; after factoring out $xe²ˣ$: $W = xe²ˣ ≠ 0$ for $x∈(0,1]$.\n>>LINEARLY INDEPENDENT<<"},
{n:"15",text:"Use the Wronskian to test linear independence: {$x sinx$, $e²ˣ$} on $−∞ < x < ∞$.",ptype:"reduct",solution:"$W = |x sinx, e²ˣ; sinx+x cosx, 2e²ˣ| = e²ˣ(2x sinx−sinx−x cosx)$.\nAt $x=π$: $W = e²π(0−0+π) = πe²π ≠ 0$.\n>>LINEARLY INDEPENDENT<<"}
]},
{id:"15.8",name:"15.8 Homogeneous — Constant Coefficients",test:"t3",ptypes:[
{id:"aux-real",name:"Real distinct roots"},
{id:"aux-rep",name:"Repeated real roots"},
{id:"aux-cx",name:"Complex conjugate roots"},
{id:"aux-given",name:"Reverse: find DE from its general solution"},
{id:"sturm",name:"Sturm-Liouville eigenvalue problems"}
],questions:[
{n:"1",text:"Find the general solution: y'' + y' − 6y = 0.",ptype:"aux-real",solution:"Auxiliary: $m²+m−6 = (m+3)(m−1) = 0$\n$m = 1$,  $m = −3$  (real distinct roots)\n>>$y = C₁eˣ+C₂e⁻³ˣ$<<"},
{n:"2",text:"Find the general solution: 2y'' − 16y' + 32y = 0.",ptype:"aux-rep",solution:"Divide by $2$: $y''−8y'+16y=0$\nAuxiliary: $m²−8m+16 = (m−4)² = 0$\n$m = 4$  (double root)\n>>$y = (C₁+C₂x)e⁴ˣ$<<"},
{n:"3",text:"Find the general solution: 2y'' + 16y' + 82y = 0.",ptype:"aux-cx",solution:"Divide by $2$: $y''+8y'+41y=0$\nAuxiliary: $m²+8m+41=0 → m=(−8±√(64−164))/2=−4±5i$\nComplex roots: $α=−4$, $β=5$\n>>$y = e⁻⁴ˣ(C₁cos5x+C₂sin5x)$<<"},
{n:"4",text:"Find the general solution: y'' + 2y' − 2y = 0.",ptype:"aux-real",solution:"Auxiliary: $m²+2m−2=0 → m=(−2±√12)/2=−1±√3$\nReal distinct irrational roots\n>>$y = C₁e^(−1+√3)x+C₂e^(−1−√3)x$<<"},
{n:"5",text:"Find the general solution: y'' − 4y' + 5y = 0.",ptype:"aux-cx",solution:"Auxiliary: $m²−4m+5=0 → m=(4±√(16−20))/2=2±i$\nComplex roots: $α=2$, $β=1$\n>>$y = e²ˣ(C₁cosx+C₂sinx)$<<"},
{n:"6",text:"Find the general solution: y''' − 3y'' + y' − 3y = 0.",ptype:"aux-cx",solution:"Try $m=3$: $27−27+3−3=0$ ✓ → factor $(m−3)$.\n$m³−3m²+m−3 = (m−3)(m²+1)=0 → m=3$, $m=±i$\n>>$y = C₁e³ˣ+C₂cosx+C₃sinx$<<"},
{n:"7",text:"Find the general solution: y'''' + 2y'' + y = 0.",ptype:"aux-rep",solution:"Auxiliary: $m⁴+2m²+1 = (m²+1)²=0$\n$m=±i$ each with multiplicity $2$ (repeated complex: $α=0$, $β=1$)\n>>$y = (C₁+C₂x)cosx+(C₃+C₄x)sinx$<<"},
{n:"8",text:"Find the general solution: y''' − 6y'' + 12y' − 8y = 0.",ptype:"aux-rep",solution:"Auxiliary: $m³−6m²+12m−8 = (m−2)³=0$\n$m=2$  (triple root)\n>>$y = (C₁+C₂x+C₃x²)e²ˣ$<<"},
{n:"9",text:"Find the general solution: 3y''' − 12y'' + 18y' − 12y = 0.",ptype:"aux-rep",solution:"Divide by $3$: $y'''−4y''+6y'−4y=0$\nTry $m=2$: $8−16+12−4=0$ ✓ → $(m−2)(m²−2m+2)=0$\n$m=2$,  $m=1±i$\n>>$y = C₁e²ˣ+eˣ(C₂cosx+C₃sinx)$<<"},
{n:"10",text:"Find the general solution: y'''' + 5y'' + 4y = 0.",ptype:"aux-cx",solution:"Auxiliary: $m⁴+5m²+4 = (m²+1)(m²+4)=0$\n$m=±i$,  $m=±2i$\n>>$y = C₁cosx+C₂sinx+C₃cos2x+C₄sin2x$<<"},
{n:"11",text:"Find the general solution: y''' − 3y'' + 2y' = 0.",ptype:"aux-real",solution:"Auxiliary: $m³−3m²+2m = m(m−1)(m−2)=0$\n$m=0$,  $m=1$,  $m=2$\n>>$y = C₁+C₂eˣ+C₃e²ˣ$<<"},
{n:"12",text:"Find the general solution: y'''' + 16y = 0.",ptype:"aux-cx",solution:"Auxiliary: $m⁴=−16=16eⁱπ → m=2e^(i(π+2kπ)/4)$, $k=0,1,2,3$.\n$k=0$: $√2(1+i)$;  $k=1$: $√2(−1+i)$;  $k=2$: $√2(−1−i)$;  $k=3$: $√2(1−i)$.\nTwo conjugate pairs: $α=±√2$, $β=√2$.\n>>$y = e^(√2x)(C₁cos(√2x)+C₂sin(√2x))+e^(−√2x)(C₃cos(√2x)+C₄sin(√2x))$<<"},
{n:"13",text:"Find the DE whose general solution is y(x) = C₁eˣ + (C₂+C₃x)e^(−4x).",ptype:"aux-given",solution:"Roots: $m=1$ (simple), $m=−4$ (double).\nAuxiliary: $(m−1)(m+4)²=0 → m³+7m²+8m−16=0$.\n>>$y'''+7y''+8y'−16y = 0$<<"},
{n:"14",text:"Find the DE whose general solution is y(x) = e^(−2x)(C₁cos4x + C₂sin4x).",ptype:"aux-given",solution:"Roots: $m=−2±4i$ (complex conjugate pair).\nAuxiliary: $(m+2)²+16 = m²+4m+20=0$.\n>>$y''+4y'+20y = 0$<<"},
{n:"15",text:"Find the DE whose general solution is y(x) = C₁ + C₂e^(√3 x) + C₃e^(−√3 x).",ptype:"aux-given",solution:"Roots: $m=0$, $m=√3$, $m=−√3$.\nAuxiliary: $m(m²−3) = m³−3m=0$.\n>>$y'''−3y' = 0$<<"},
{n:"16",text:"Find the DE whose general solution is y(x) = eˣ(C₁+C₂x)cos(√2 x) + eˣ(C₃+C₄x)sin(√2 x).",ptype:"aux-given",solution:"Roots: $m=1±√2i$ each with multiplicity $2$.\nAuxiliary: $[(m−1)²+2]²=(m²−2m+3)²=0 → m⁴−4m³+10m²−12m+9=0$.\n>>$y''''−4y'''+10y''−12y'+9y = 0$<<"},
{n:"17",text:"Show that y=eᵃˣsinbx being a solution of y''+2y'+10y=0 forces a=−1, b=±3. Verify eᵃˣcosbx is also a solution. Write the general solution.",ptype:"aux-cx",solution:""},
{n:"18",text:"The equation y'''+ay''+by'+cy=0 has general solution y=C₁e^(−x)+e^(−2x)(C₂sin4x+C₃cos4x). Find a, b, c.",ptype:"aux-cx",solution:""},
{n:"19",text:"Find the eigenvalues and eigenfunctions: y''+λy=0, 0<x<3; y(0)=0=y(3).",ptype:"sturm",solution:"$λ≤0$: only trivial solution.\n$λ>0$: $y=C₁cos(μx)+C₂sin(μx)$ with $μ=√λ$.\n$y(0)=0 → C₁=0$;  $y(3)=0 → sin(3μ)=0 → μ=nπ/3$.\n>>$λₙ = n²π²/9$,  $yₙ = sin(nπx/3)$  $(n=1,2,3,...)$<<"},
{n:"20",text:"Find the eigenvalues and eigenfunctions: y''+λy=0, 0<x<4; y'(0)=0=y'(4).",ptype:"sturm",solution:"$y=C₁cos(μx)+C₂sin(μx)$.\n$y'(0)=C₂μ=0 → C₂=0$;  $y'(4)=−C₁μsin(4μ)=0 → μ=nπ/4$.\nAlso $λ₀=0$ with $y=1$.\n>>$λₙ = n²π²/16$,  $yₙ = cos(nπx/4)$  $(n=0,1,2,...)$<<"},
{n:"21",text:"Find the eigenvalues and eigenfunctions: y''+λy=0, 0<x<2; y(0)=0=y'(2).",ptype:"sturm",solution:"$y(0)=0 → C₁=0 → y=C₂sin(μx)$.\n$y'(2)=C₂μcos(2μ)=0 → 2μ=(2n−1)π/2 → μ=(2n−1)π/4$.\n>>$λₙ = (2n−1)²π²/16$,  $yₙ = sin((2n−1)πx/4)$  $(n=1,2,...)$<<"},
{n:"22",text:"Find the eigenvalues and eigenfunctions: y''+λy=0, 0<x<5; y'(0)=0=y(5).",ptype:"sturm",solution:"$y'(0)=0 → C₂=0 → y=C₁cos(μx)$.\n$y(5)=C₁cos(5μ)=0 → 5μ=(2n−1)π/2 → μ=(2n−1)π/10$.\n>>$λₙ = (2n−1)²π²/100$,  $yₙ = cos((2n−1)πx/10)$  $(n=1,2,...)$<<"},
{n:"23",text:"Find the eigenvalues and eigenfunctions: y''−y'+λy=0, 0<x<1; y(0)=0=y(1).",ptype:"sturm",solution:"Char. eq: $m²−m+λ=0 → m=1/2±iβ$ with $β=√(4λ−1)/2$ (need $λ>1/4$).\n$y=e^(x/2)(C₁cosβx+C₂sinβx)$.\n$y(0)=0 → C₁=0$;  $y(1)=0 → sinβ=0 → β=nπ → 4λ−1=4n²π²$.\n>>$λₙ = (1+4n²π²)/4$,  $yₙ = e^(x/2)sin(nπx)$  $(n=1,2,...)$<<"},
{n:"24",text:"A mass M in the xy-plane is subjected to a force always directed toward the origin with magnitude proportional to its distance from the origin. At a certain instant M passes through (x₀,0) with speed v in the positive y-direction. (a) Find the path of M assuming no friction and no damping. (b) Find the path if the force is away from the origin instead.",ptype:"aux-cx",solution:""},
{n:"27",text:"If M, β, and k are all positive constants, find a general solution for $Md²x/dt²+βdx/dt+kx=0$. Discuss all possibilities: underdamped ($β²<4kM$), critically damped ($β²=4kM$), and overdamped ($β²>4kM$).",ptype:"aux-rep",solution:""}
]},
{id:"15.9",name:"15.9 Nonhomogeneous — Constant Coefficients",test:"t3",ptypes:[
{id:"both",name:"Full solution: find yₕ + yₚ by both methods"},
{id:"form-only",name:"State the form of yₚ only (do not evaluate)"}
],questions:[
{n:"1",text:"Find yₚ by both undetermined coefficients and operator methods; find the general solution: 2y''−16y'+32y = −e^(4x).",ptype:"both",solution:"$yₕ$: $2(m−4)²=0 → m=4$ (double) → $yₕ=(C₁+C₂x)e⁴ˣ$\n$e⁴ˣ$ duplicates $yₕ$ ($k=2$) → try $yₚ=Ax²e⁴ˣ$.\nSubstitute: $4Ae⁴ˣ=−e⁴ˣ → A=−1/4$.\n>>$y = (C₁+C₂x)e⁴ˣ−(x²/4)e⁴ˣ$<<"},
{n:"2",text:"Find yₚ by both undetermined coefficients and operator methods; find the general solution: y''+2y'−2y = x²e^(−x).",ptype:"both",solution:"$yₕ$: $m²+2m−2=0 → m=−1±√3 → yₕ=C₁e^(−1+√3)x+C₂e^(−1−√3)x$\n$m=−1$ not a root → try $yₚ=(Ax²+Bx+C)e⁻ˣ$.\nEquate coefficients: $−3A=1→A=−1/3$; $−4A−3B=0→B=−4/9$; $2A−2B−3C=0→C=−14/27$.\n>>$y = C₁e^(−1+√3)x+C₂e^(−1−√3)x+(−x²/3−4x/9−14/27)e⁻ˣ$<<"},
{n:"3",text:"Find yₚ by both undetermined coefficients and operator methods; find the general solution: y'''−3y''+y'−3y = 3xeˣ+2.",ptype:"both",solution:"$yₕ$: $(m−3)(m²+1)=0 → m=3,±i → yₕ=C₁e³ˣ+C₂cosx+C₃sinx$\nFor $3xeˣ$ ($m=1$ not a root): $yₚ₁=(Ax+B)eˣ → −3A=3→A=−1$; $A−3B=0→B=−1/3$.\nFor $2$ ($m=0$ not a root): $yₚ₂=C → −3C=2→C=−2/3$.\n>>$y = C₁e³ˣ+C₂cosx+C₃sinx+(−x−1/3)eˣ−2/3$<<"},
{n:"4",text:"Find yₚ by both undetermined coefficients and operator methods; find the general solution: y''''+2y''+y = cos2x.",ptype:"both",solution:"$yₕ$: $(m²+1)²=0 → m=±i$ (mult. $2$) → $yₕ=(C₁+C₂x)cosx+(C₃+C₄x)sinx$\n$m=2i$ not a root → $yₚ=Acos2x+Bsin2x$.\nSub: $(16−8+1)yₚ=9yₚ=cos2x → A=1/9$, $B=0$.\n>>$y = (C₁+C₂x)cosx+(C₃+C₄x)sinx+cos2x/9$<<"},
{n:"5",text:"Find yₚ by both undetermined coefficients and operator methods; find the general solution: y'''−6y''+12y'−8y = 2e^(2x).",ptype:"both",solution:"$yₕ$: $(m−2)³=0 → m=2$ (triple) → $yₕ=(C₁+C₂x+C₃x²)e²ˣ$\n$e²ˣ$ duplicates $yₕ$ ($k=3$) → $yₚ=Ax³e²ˣ$.\nSubstitute: $6Ae²ˣ=2e²ˣ → A=1/3$.\n>>$y = (C₁+C₂x+C₃x²)e²ˣ+x³e²ˣ/3$<<"},
{n:"6",text:"Find yₚ by both undetermined coefficients and operator methods; find the general solution: y''''+5y''+4y = e^(−2x).",ptype:"both",solution:"$yₕ$: $(m²+1)(m²+4)=0 → m=±i,±2i → yₕ=C₁cosx+C₂sinx+C₃cos2x+C₄sin2x$\n$m=−2$ not a root → $yₚ=Ae⁻²ˣ$.\nSub: $(16+20+4)A=40A=1 → A=1/40$.\n>>$y = C₁cosx+C₂sinx+C₃cos2x+C₄sin2x+e⁻²ˣ/40$<<"},
{n:"7",text:"Find yₚ by both undetermined coefficients and operator methods; find the general solution: y'''−3y''+2y' = x²+e^(−x).",ptype:"both",solution:"$yₕ$: $m(m−1)(m−2)=0 → m=0,1,2 → yₕ=C₁+C₂eˣ+C₃e²ˣ$\nFor $x²$ ($m=0$ root, $k=1$): $yₚ₁=x(Ax²+Bx+C)$. Equate: $A=1/6$, $B=3/4$, $C=3/2$.\nFor $e⁻ˣ$ ($m=−1$ not a root): $yₚ₂=De⁻ˣ → −6D=1→D=−1/6$.\n>>$y = C₁+C₂eˣ+C₃e²ˣ+x³/6+3x²/4+3x/2−e⁻ˣ/6$<<"},
{n:"8",text:"Find yₚ by both undetermined coefficients and operator methods; find the general solution: 2y''+16y'+82y = −2e^(2x)sinx.",ptype:"both",solution:"$yₕ$: $m²+8m+41=0 → m=−4±5i → yₕ=e⁻⁴ˣ(C₁cos5x+C₂sin5x)$\n$F(x)=Im(−2e^((2+i)x))$; $m=2+i$ not a root.\n$φ(2+i)=2(3+4i)+32+16i+82=120+24i$.\n$yₚ=Im[−2e^((2+i)x)/(120+24i)]$; multiply by conjugate → $yₚ=e²ˣ(Acosx+Bsinx)$.\n>>$y = e⁻⁴ˣ(C₁cos5x+C₂sin5x)+e²ˣ(Acosx+Bsinx)$<<"},
{n:"9",text:"Find yₚ by both undetermined coefficients and operator methods; find the general solution: y''+y'−6y = x+cosx.",ptype:"both",solution:"$yₕ$: $(m+3)(m−2)=0 → m=−3,2 → yₕ=C₁e⁻³ˣ+C₂e²ˣ$\nFor $x$: $yₚ₁=Ax+B → −6A=1→A=−1/6$; $A−6B=0→B=−1/36$.\nFor $cosx$: $yₚ₂=Ccosx+Dsinx → −7C+D=1$, $−C−7D=0 → D=1/50$, $C=−7/50$.\n>>$y = C₁e⁻³ˣ+C₂e²ˣ−x/6−1/36+(−7cosx+sinx)/50$<<"},
{n:"10",text:"Find yₚ by both undetermined coefficients and operator methods; find the general solution: y''−4y'+5y = x cosx.",ptype:"both",solution:"$yₕ$: $m²−4m+5=0 → m=2±i → yₕ=e²ˣ(C₁cosx+C₂sinx)$\n$F(x)=Re(xeⁱˣ)$; $m=i$ not a root.\nOperator: $φ(D+i)=D²+(2i−4)D+(4−4i)$; expand $1/φ(D+i)·x$ keeping through $D$.\n$yₚ$ involves $xcosx$ and $xsinx$ terms (full computation via series expansion).\n>>$y = e²ˣ(C₁cosx+C₂sinx)+yₚ$<<"},
{n:"11",text:"Find yₚ by both undetermined coefficients and operator methods; find the general solution: 3y'''−12y''+18y'−12y = x²+3x−4.",ptype:"both",solution:"Divide by $3$: $y'''−4y''+6y'−4y=(x²+3x−4)/3$\n$yₕ$: $(m−2)(m²−2m+2)=0 → m=2$, $m=1±i → yₕ=C₁e²ˣ+eˣ(C₂cosx+C₃sinx)$\n$m=0$ not a root → $yₚ=Ax²+Bx+C$. Equate: $A=−1/12$, $B=−1/2$, $C$ computed from $−8A+6B−4C=−4/3$.\n>>$y = C₁e²ˣ+eˣ(C₂cosx+C₃sinx)+Ax²+Bx+C$<<"},
{n:"12",text:"State the form of yₚ only (do not evaluate coefficients): y'''+9y''+27y'+27y = xe^(3x)+2x cosx.",ptype:"form-only",solution:"$yₕ$: $(m+3)³=0 → m=−3$ (triple).\nFor $xe³ˣ$ ($m=3$ not a root): $yₚ₁=(Ax+B)e³ˣ$.\nFor $2xcosx$ ($m=±i$ not roots): $yₚ₂=(Cx+D)cosx+(Ex+F)sinx$.\n>>$yₚ = (Ax+B)e³ˣ+(Cx+D)cosx+(Ex+F)sinx$<<"},
{n:"13",text:"State the form of yₚ only (do not evaluate coefficients): y'''+4y''+y'+4y = xeˣ sinx.",ptype:"form-only",solution:"$yₕ$: $(m+4)(m²+1)=0 → m=−4,±i$.\n$xeˣsinx = Im(xe^((1+i)x))$; $m=1+i$ not a root.\n>>$yₚ = (Ax+B)eˣcosx+(Cx+D)eˣsinx$<<"},
{n:"14",text:"State the form of yₚ only (do not evaluate coefficients): 2y'''−6y''−12y'+16y = xeˣ+2x³−4cosx.",ptype:"form-only",solution:"$yₕ$: $(m−1)(m+2)(m−4)=0 → m=1,−2,4$.\nFor $xeˣ$ ($m=1$ IS a root, $k=1$): $yₚ₁=x(Ax+B)eˣ=(Ax²+Bx)eˣ$.\nFor $2x³$ ($m=0$ not a root): $yₚ₂=Cx³+Dx²+Ex+F$.\nFor $−4cosx$ ($m=±i$ not roots): $yₚ₃=Gcosx+Hsinx$.\n>>$yₚ = (Ax²+Bx)eˣ+Cx³+Dx²+Ex+F+Gcosx+Hsinx$<<"},
{n:"15",text:"State the form of yₚ only (do not evaluate coefficients): 2y''−4y'+10y = 5eˣ sin2x.",ptype:"form-only",solution:"$yₕ$: $m²−2m+5=0 → m=1±2i$.\n$5eˣsin2x=Im(5e^((1+2i)x))$; $m=1+2i$ IS a root ($k=1$).\n>>$yₚ = xeˣ(Acos2x+Bsin2x)$<<"},
{n:"17",text:"Find a general solution for y'' + 2y' − 4y = cos²x. Hint: use the identity cos²x = (1+cos2x)/2.",ptype:"both",solution:""},
{n:"18",text:"Find a general solution for 2y'' − 4y' + 3y = cosx sin2x. Hint: use the product-to-sum identity to rewrite the right side.",ptype:"both",solution:""},
{n:"19",text:"Solve the IVP fully: y''−3y'+2y = 8x²+12e^(−x), y(0)=0, y'(0)=2.",ptype:"both",solution:"$yₕ$: $(m−1)(m−2)=0 → m=1,2 → yₕ=C₁eˣ+C₂e²ˣ$\nFor $8x²$: $yₚ₁=Ax²+Bx+C → A=4$, $B=12$, $C=13$.\nFor $12e⁻ˣ$: $yₚ₂=De⁻ˣ → 6D=12→D=2$.\n$y(0)=C₁+C₂+15=0$ and $y'(0)=C₁+2C₂+10=2 → C₂=7$, $C₁=−22$.\n>>$y = −22eˣ+7e²ˣ+4x²+12x+13+2e⁻ˣ$<<"},
{n:"20",text:"Solve the IVP fully: y''+9y = x(sin3x+cos3x), y(0)=y'(0)=0.",ptype:"both",solution:"$yₕ$: $m²+9=0 → m=±3i → yₕ=C₁cos3x+C₂sin3x$\n$sin3x$, $cos3x$ appear in $yₕ$ ($k=1$) → $yₚ=x[(Ax+B)cos3x+(Cx+D)sin3x]$.\nSubstitute into $y''+9y$, equate coefficients.\nApply $y(0)=0$, $y'(0)=0$ to find $C₁$, $C₂$.\n>>$y = C₁cos3x+C₂sin3x+x[(Ax+B)cos3x+(Cx+D)sin3x]$<<"},
{n:"21",text:"If J, k, and w are positive constants, find a general solution for $J(d⁴y/dx⁴)+ky=w$.",ptype:"both",solution:""},
{n:"23",text:"Use the substitution $x=eᶻ$ to find a general solution for $d²u/dr²+(1/r)du/dr−u/r²=0$, $r>0$. (Euler equation in r.)",ptype:"both",solution:""},
{n:"24",text:"Use the substitution $x=eᶻ$ to find a general solution for $x²y''+xy'+4y=1$, $x>0$.",ptype:"both",solution:"$yₕ$: Euler equation, try $y=xᵐ → m²+4=0 → m=±2i$.\n$yₕ = C₁cos(2lnx)+C₂sin(2lnx)$\n$yₚ$: try $yₚ=A$ (constant) → $4A=1 → A=1/4$.\n>>$y = C₁cos(2lnx)+C₂sin(2lnx)+1/4$<<"}
]},
{id:"15.10",name:"15.10 Applications of Linear DEs",test:"t3",ptypes:[
{id:"spring",name:"Mass-spring systems (mechanical vibration)"},
{id:"circuit",name:"LCR electrical circuits"},
{id:"beam",name:"Other applications"}
],questions:[
{n:"1",text:"A 1-kg mass on a spring with k=16N/m is pulled 10cm below equilibrium and released. Find x(t) for: (a) no damping, (b) damping force = 0.1×velocity N, (c) damping force = 10×velocity N. Classify the motion in each case.",ptype:"spring",solution:"(a) $x''+16x=0$; $m=±4i$; $x(0)=−0.1$, $x'(0)=0$.\n>>$x(t) = −0.1cos4t$<<  (simple harmonic, amplitude=$0.1$m, period=$π/2$s)\n(b) $β=0.1$: $m≈−0.05±8i$ — underdamped; apply ICs for $C₁$,$C₂$.\n>>$x(t) ≈ e^(−0.05t)(C₁cos8t+C₂sin8t)$<<\n(c) $β=10$: $(m+2)(m+8)=0 → m=−2,−8$ — overdamped; $C₁+C₂=−0.1$, $C₁=−4C₂ → C₂=1/30$, $C₁=−2/15$.\n>>$x(t) = −(2/15)e⁻²ᵗ+(1/30)e⁻⁸ᵗ$<<"},
{n:"2",text:"A 200-g mass on a spring with k=10N/m is subject to external force 4sin10t N and damping = (3/2)×velocity. Find position as a function of time.",ptype:"spring",solution:"DE: $0.2x''+1.5x'+10x=4sin10t → x''+7.5x'+50x=20sin10t$\n$yₕ$: $m²+7.5m+50=0 → m=−3.75±5.99i$ (underdamped)\n$yₚ=Asin10t+Bcos10t$: $−50A+75B=20$, $−75A−50B=0 → A=−8/65$, $B=12/65$.\nApply ICs $x(0)=x'(0)=0$ to find $C₁$,$C₂$.\n>>$x(t) = e^(−3.75t)(C₁cos5.99t+C₂sin5.99t)+(−8sin10t+12cos10t)/65$<<"},
{n:"3",text:"Series LC circuit: 0.001F capacitor, 2H inductor, 20V DC battery in series. No initial charge. Find I(t).",ptype:"circuit",solution:"DE: $2Q''+1000Q=20$\n$m=±10√5·i → Qₕ=C₁cos(10√5t)+C₂sin(10√5t)$; $Qₚ=0.02$.\nICs: $Q(0)=0→C₁=−0.02$; $Q'(0)=0→C₂=0$.\n$Q(t)=0.02(1−cos(10√5t))$.\n>>$I(t) = 0.2√5·sin(10√5t)$<<"},
{n:"4",text:"Series RLC circuit: 0.02F capacitor, 100Ω resistor, 1H inductor in series. Q(0)=5C. Find Q(t).",ptype:"circuit",solution:"DE: $Q''+100Q'+50Q=0$\n$m=(−100±√9800)/2=−50±35√2 → m₁≈−0.5$, $m₂≈−99.5$ (overdamped).\nICs: $C₁+C₂=5$, $m₁C₁+m₂C₂=0 → C₁=5m₂/(m₂−m₁)$, $C₂=−5m₁/(m₂−m₁)$.\n>>$Q(t) = C₁e^(m₁t)+C₂e^(m₂t)$<<"},
{n:"5",text:"Series RL circuit: 5H inductor, 20Ω resistor, generator 10sin2t. Find the transient and steady-state currents.",ptype:"circuit",solution:"DE: $5I'+20I=10sin2t → I'+4I=2sin2t$\nIntegrating factor $μ=e⁴ᵗ$; integrate: $d/dt[Ie⁴ᵗ]=2e⁴ᵗsin2t → ∫=e⁴ᵗ(4sin2t−2cos2t)/10$.\nTransient: >>$Ce⁻⁴ᵗ$<< (decays)\nSteady-state: >>$(2sin2t−cos2t)/5$<<"},
{n:"6",text:"A mass M attached to a spring k is released from rest at t=0. No damping. Find displacement as a function of time.",ptype:"spring",solution:"DE: $Mx''+kx=0$; $m=±iω₀$ where $ω₀=√(k/M)$.\nICs: $x(0)=x₀→C₁=x₀$; $x'(0)=0→C₂=0$.\n>>$x(t) = x₀cos(ω₀t)$<<  (amplitude=$x₀$, period=$2π/ω₀$)"},
{n:"7",text:"(a) A 0.5-kg mass on a table is attached to a spring with k=18N/m; stretched 5cm and released. Friction force = 0.5N. Show the DE is d²x/dt²+36x=1, x(0)=0.05, x'(0)=0. (b) Find where the mass first comes to rest. Will it move again?",ptype:"spring",solution:""},
{n:"8",text:"Repeat Exercise 7 with the mass pulled 25cm to the right.",ptype:"spring",solution:""},
{n:"9",text:"An uncharged 0.1F capacitor, 0.5H inductor, and 3Ω resistor in series. Current at t=0 is 1A. Find the maximum charge on the capacitor.",ptype:"circuit",solution:""},
{n:"10",text:"Show that the DE Mx''+βx'+kx=0 gives: (a) β=0 → SHM; (b) β²−4kM<0 → underdamped; (c) β²−4kM>0 → overdamped; (d) β²−4kM=0 → critically damped.",ptype:"spring",solution:""},
{n:"11",text:"Piston: md²x/dt² + β dx/dt + kx = AP(t). Find the steady-state solution when P(t) = P₀sinωt.",ptype:"spring",solution:""},
{n:"12",text:"A 100-g mass on a spring with k=4000N/m: x(0)=0, x'(0)=10m/s, external force 3cos200t. Find x(t). Does resonance occur?",ptype:"spring",solution:"$ω₀=√(k/M)=200$ rad/s = forcing frequency → RESONANCE.\nDE: $x''+40000x=30cos200t$; $yₕ=C₁cos200t+C₂sin200t$.\n$cos200t$ in $yₕ$ → $yₚ=t(Acos200t+Bsin200t) → B=3/40$, $A=0$.\nICs: $C₁=0$, $C₂=1/20$.\n>>$x(t) = (1/20)sin200t+(3t/40)sin200t$<<  (amplitude grows — resonance confirmed)"},
{n:"13",text:"A 1-kg mass on a spring with k=64N/m: F(t)=2sin8t, x(0)=x'(0)=0, no damping. Find x(t). What happens as t→∞?",ptype:"spring",solution:"$ω₀=√64=8$ = forcing frequency → RESONANCE.\nDE: $x''+64x=2sin8t$; $sin8t$ in $yₕ$ → $yₚ=t(Acos8t+Bsin8t) → A=−1/8$, $B=0$.\nICs: $C₁=0$, $C₂=1/64$.\n>>$x(t) = (1/64)sin8t−(t/8)cos8t$<<  (grows without bound as $t→∞$)"},
{n:"14",text:"A mass M on a spring k is subjected to force Acosωt. Find the forcing frequency ω that causes resonance.",ptype:"spring",solution:"DE: $Mx''+kx=Acosωt$; $ω₀=√(k/M)$.\nResonance when forcing frequency equals natural frequency; $yₚ=t(Acos(ω₀t)+Bsin(ω₀t))$ grows without bound.\n>>$ω = ω₀ = √(k/M)$<<"},
{n:"15",text:"A 25/9 H inductor, 0.04F capacitor, and generator 15cos3t in series. Find I(t). Does resonance occur?",ptype:"circuit",solution:"$ω₀=1/√(LC)=3$ rad/s = forcing frequency → RESONANCE.\nDE: $(25/9)Q''+25Q=15cos3t → Q''+9Q=(27/5)cos3t$.\n$yₚ=t(Acos3t+Bsin3t) → B=9/10$, $A=0 → yₚ=(9t/10)sin3t$.\nApply $Q(0)=I(0)=0$ to find $C₁$,$C₂$.\n>>$I(t) = Q'(t) = C₁(−3sin3t)+C₂(3cos3t)+(9/10)(sin3t+3tcos3t)$<<"},
{n:"16",text:"A mass M on a spring k with damping β, subjected to force Acosωt. (a) Show the steady-state amplitude is A/√[(k−Mω²)²+β²ω²]. (b) Write in the form A·sin(ωt+φ)/√[...]. (c) Find ω for maximum amplitude.",ptype:"spring",solution:""},
{n:"17",text:"(a) A cube L metres per side, mass M, floats half submerged. Pushed down slightly. Find the DE for oscillations using Archimedes' principle. (b) Find the frequency of oscillation.",ptype:"spring",solution:""},
{n:"18",text:"A weighing platform of weight W is supported by springs with combined spring constant k. A package of weight w is dropped onto the platform so they move together. Find the maximum value of w so that oscillations do not occur. Assume damping constant β.",ptype:"spring",solution:""},
{n:"19",text:"A spring-mounted two-wheel trailer of mass 400 kg is towed at speed v over an undulating road $Y=Acos(πx/5)$ m. No damping, spring constant 40000 N/m. Find the speed at which resonance occurs.",ptype:"spring",solution:""},
{n:"20",text:"In Example 15.29, $M=200$ kg, $k=50000$ N/m, $β=3000$ kg/s, road equation $Y=0.1sin(πx/40)$ m. (a) Find $y(t)$ for $v=10$ m/s and state the amplitude of the steady-state solution. (b) Repeat for $v=20$ m/s.",ptype:"spring",solution:""}
]}
]}
]};
