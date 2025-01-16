# What is OGraph?

The Open Graph Protocol (OGraph) is an application-level protocol derived from Graph theory to implement quarriable and interoperable REST services over HTTP while adhering to Domain-Driven Design concepts.



# Why use OGraph

- 



## Limitations & Constraints
A lot of times in technical documentation you find limitations about a framework as you begin to implement a solution. To address that, the information below has been presented as upfront as possible to better comprehend what you may find out the gate

- OGraph does NOT support any other media type besides JSON & XML

# Key Concepts

## Vertex/Node

A **vertex/node** is a single entity within a graph model



### Label/Name


## Edge


## Labels






![Semantic Model Example](https://lucid.app/publicSegments/view/8f0fcc8f-a727-4db4-a8f5-0aee0141e7a6/image.png)



## OGraph as a Directed Label Graph


If we were to model RESTful resources and their interactions in a graph, the model would most closely resemble a **directed labeled graph**. Here's why:

1. **Vertices Represent Resources**: Each node (or vertex) in the graph would represent a unique resource in the RESTful system. These resources could be anything: users, articles, products, orders, etc. Each resource is uniquely identified by a URI, which can serve as the node's identifier or label.

2. **Edges Represent Relationships or Transitions**: Relationships between resources, or possible state transitions, would be represented as edges (or arcs) between nodes. These edges could be derived from hypermedia links provided by resources in a HATEOAS-driven API or inferred from the domain's relational structure.

3. **Directed Nature**: The interactions in a RESTful system are directed. For instance, if Resource A has a link to Resource B, it doesn't necessarily mean B has a link back to A. Therefore, the edges in our graph are directed, capturing the nature of these interactions or transitions.

4. **Labeled Edges to Indicate Relation Type or HTTP Verb**: Edges can be labeled to describe the nature of the relationship or the kind of action that can be taken. For example, an edge might be labeled "contains" to indicate a composition relationship or labeled with HTTP verbs like "GET" or "POST" to indicate possible interactions.

5. **Potential for Weighted Edges**: If you want to add more information about the frequency of interactions or the importance of certain relationships, the edges could be weighted.

6. **Hypermedia Controls as Graph Traversals**: In a HATEOAS-driven REST API, clients navigate through resources by following hypermedia links. This act of following links corresponds to traversing the edges of our graph model.

An advantage of representing a RESTful system as a graph is that it provides a high-level, visual representation of resources and their interactions. It can help in understanding and designing complex systems by showcasing how resources relate to each other and how clients are expected to navigate and interact with the system.