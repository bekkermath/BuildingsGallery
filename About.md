---
layout: default
title: About
---

Although there are buildings that are made up out of products of simplices, the buildings we have modeled are simplicial complexes. The maximal simplices all have the same dimension, and are called *chambers*. The number of vertices needed to define a single chamber is called the *rank* of the building. The chambers are seperated by *walls*, which are exactly the codimension one simplices. In a spherical building of rank $n$, collections of chambers that form $n$-spheres are called apartments. In an affine complex the apartments are $n-1$-dimensional euclidean spaces. We think of spherical apartments as tesselations of $n$-spheres, and of affine apartments as tesselations of euclidean space. Buildings entirely consist of apartments glued together.

Buildings are combinatorial objects that are used in the theory of algebraic groups to study the structure of these groups. Especially when the group is defined over a p-adic field, the theory of buildings helps us understand them better. We consider a building to be associated to a group if the group acts on it *strongly transitively*. This means that the group acts transitively on the chambers, and the stabiliser of a chamber acts transitively on the apartments containing that chamber.

A very useful property that arrises from a strongly transitive action is that the stabiliser of an apartment modulo its pointwise fixer is a *Coxeter group*. This means that it is generated by elements of order two, called *simple reflections*. In the application these are denoted $s_i$. A rank $n$ building has $n$ simple reflections.

In the web application, we choose a chamber and call it the fundamental chamber. It's stabiliser is denoted by $B$. We can then label all other chambers by elements of $G/B$. We abbreviate this by choosing a canonical representative. Hovering the cursor over a chamber shows it's representative. The notation $u\left(i,j\right)\left(k\right)$ means the unit matrix $I$ plus a matrix with zeros everywhere, except at position $\left(i,j\right)$ where it has value $k$.