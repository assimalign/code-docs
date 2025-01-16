## Graph
A **graph model** is nothing more than a large collection of binary relations. Simply it shows a one-to-one relationship.

### Types of Graphs
When delving into the world of graph modeling you'll find that there are various types of graphs some of which include: 

1. **Property Graph Model**: This is the most common graph model. It has nodes and edges, both of which can hold properties (key-value pairs). Nodes typically represent entities, while edges represent relationships between these entities.

2. **Hypergraph**: In a hypergraph, an edge can connect more than two nodes. These edges are called hyperedges.

3. **Triple-Store Model (RDF Graph Model)**: This model represents data in triples, where each triple consists of a subject, a predicate, and an object. It's the foundational model for the Semantic Web.

4. **Graph Model with Derived Nodes**: In this model, nodes can be derived or computed based on other nodes or relationships. This can be a way to represent aggregated or summarized information.

5. **Bipartite Graph**: The nodes can be divided into two sets, and edges only run between nodes of different sets. 

6. **Temporal or Time-Series Graph**: This model considers the factor of time. Nodes and edges might exist at certain times and not at others, or relationships might change over time.

7. **Spatial Graphs**: Nodes and edges are associated with spatial information, often in the form of coordinates or geographical data.

8. **Tree and Hierarchical Graphs**: These are specialized forms of graphs where there's a specific top-down or parent-child relationship structure.

9. **Knowledge Graph**: A large network of entities and their interrelations, used to store knowledge in a structured form. They often combine aspects of property graphs and triple-stores.

The choice of which graph model to use depends largely on the nature of the data, the complexity of the relationships, and the specific queries or operations you plan to execute on the data.

## Labels


## Vertex/Node

A **vertex/node** is a single entity within a graph model

**OGraph Rules:**
- A Vertex must be bound to a Type
- A Vertex MAY have more than one label
- A Vertex label MUST match a literal route segment
- All Vertex operations MUST return a matching type bound the Vertex 

### Name/Identifier

### Labels

## Edge/Link