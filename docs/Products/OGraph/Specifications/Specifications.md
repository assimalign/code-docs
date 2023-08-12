OGraph seeks to solve a convention problem rather than a code problem.

# Introduction
The Open Graph Protocol (OGraph) is an application-level protocol derived from Graph theory to implement quarriable and interoperable REST services over HTTP while adhering to Domain-Driven Design concepts. This specification defines the core semantics and behavior of the OGraph protocol.

## Terminology
The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [**RFC2119**](https://www.rfc-editor.org/rfc/rfc2119).

## References

| Reference |     |
| --------- | --- |
| [Architectural Styles and the Design of Network-based Software Architectures (gbiv.com)](https://roy.gbiv.com/pubs/dissertation/top.htm)          |     |



 
# Overview

The OData Protocol is an application-level protocol for interacting with data via RESTful interfaces. The protocol supports the description of data models and the editing and querying of data according to those models. It provides facilities for:

- Metadata: a machine-readable description of the data model exposed by a particular service.
- Data: sets of data entities and the relationships between them.
- Querying: requesting that the service perform a set of filtering and other transformations to its data, then return the results.
- Editing: creating, updating, and deleting data.
- Operations: invoking custom logic
- Vocabularies: attaching custom semantics

The OData Protocol is different from other REST-based web service approaches in that it provides a uniform way to describe both the data and the data model. This improves semantic interoperability between systems and allows an ecosystem to emerge.

Towards that end, the OData Protocol follows these design principles:

- Prefer mechanisms that work on a variety of data sources. In particular, do not assume a relational data model.
- Extensibility is important. Services should be able to support extended functionality without breaking clients unaware of those extensions.
- Follow REST principles.
- OData should build incrementally. A very basic, compliant service should be easy to build, with additional work necessary only to support additional capabilities.
- Keep it simple. Address the common cases and provide extensibility where necessary.

---
# Graph
Within graph theory, a graph is a mathematical structure used to model pairwise relations between objects. In essence a graph can be thought of as a network and it's connectivity. It is intended to represent the structure of a network rather than it's appearance. As this can be applied in various areas OGraph seeks to model relationships between data structures and their interactions over REST services in terms of reading and modifying data.

The intend of the Open Graph Protocol (OGraph) is to provide a graph representation of REST services, their operations, and the events which are spawn from the completion of those operations. It also intends to promote clean architecture by identifying bounded contexts between varying graph models.

---
## Core Constructs
This section is intended to highlight key elements of graph theory which is essential for understanding OGraph. It also explains the interactions and derived concepts which extend Graph theory and make up the OGraph Protocol.


```
     Node 1                        Node 2 
┏ ━ ━ ━ ━ ━ ━ ━ ┓             ┏ ━ ━ ━ ━ ━ ━ ━ ┓
┃ label: Person ┃             ┃ label: Person ┃
┃     John      ┃             ┃     Sally     ┃
┃               ┃ ----------> ┃               ┃
┗ ━ ━ ━ ━ ━ ━ ━ ┛             ┗ ━ ━ ━ ━ ━ ━ ━ ┛

```


### Node/Vertex

> A Node/Vertex represents a single entity within a graph and can be considered an equivalent of an individual record within a table. Unlike a record the data is stored in key value pairs called properties. 
> 
> It is important to note that Node and Vertex are often used interchangeably and **SHOULD** always be considered the same.


### Labels

> A label is a named graph construct that is used to group nodes into sets. As a node can be considered a record in a table then a label can be considered the table itself. However, rather than the table being confined to a structured tabular view each column can be made up of complex types.

#### Label Definition
In OGraph a label must have a single defined schema of all the properties and data types it can return in a request for a collection of nodes. A label Schema are scoped to the nodes it represents and should not display any constraints outside of the node or other entities within the graph

A label schema should only present type definitions.

### Edge/Link

>An edge is a link between two nodes. A link is the abstraction of a transport infrastructure supporting movements between nodes. It has a direction that is commonly represented as an arrow. When an arrow is not used, it is assumed the link is bi-directional.
>
>In OGraph we can create multiple edges for various filtering
>For example, let's say we've defined a edge called "`wrote`" between `Authors` and `Books` which when `Books` is resolved against the authors endpoint: `/api/authors?query=project({ authorId, authorName }).project(wrote, { bookName })` a list of books wrote by each author returned would come back in the response. Now let's say we wanted 



### Graph Visuals

 - **Planar Graph:** A graph where all the intersections of two edges are a vertex. Since this graph is located within a plane, its topology is two-dimensional. This is typically the case for power grids, road and railway networks, although great care must be inferred to the definition of nodes (terminals, warehouses, cities).

- **Non-planar Graph** A graph where there are no vertices at the intersection of at least two edges. Networks that can be considered in a planar fashion, such as roads, can be represented as non-planar networks. This implies a third dimension in the topology of the graph since there is the possibility of having a movement “passing over” another movement such as for air and maritime transport, or an overpass for a road. A non-planar graph has potentially much more links than a planar graph.

- **Simple graph**. A graph that includes only one type of link between its nodes. A road or rail network are simple graphs.

- **Multigraph**. A graph that includes several types of links between its nodes. Some nodes can be connected to one link type while others can be connected to more than one that are running in parallel. A graph depicting a road and a rail network with different links between nodes serviced by either or both modes is a multigraph.


---
## Incorporated Constructs
This section is intended to highlight incorporated constructs that are key to OGraph. The following concepts **SHOULD** not be considered pertinent to Graph theory as this section are assimilated approaches specific to OGraph.



### Types & Transfer Objects
The OGraph query language uses  These constructs are derived from the defined node schema

#### Types 
Types add structure to the node by defining the serialization and deserialization for runtime types.

#### Transfer Objects
Transfer objects are specialized types for incoming requests. Often times a REST services will need to limit the incoming data such as audit fields or keys on entities to prevent those being saved to the data layer. Transfer Object **SHOULD** be built from the 

For example, if there are nodes labeled `products`  that have a key `productId`  and a users want to create a new `product` object  then the server should only expose the necessary attributes for creating a product.

It would defeat the purpose of REST if the user had to supply the product ID for creating a new product object.

When sending and receiving data between server and client it is beneficial to limit or constrain what is incoming versus what is outgoing. Transfer objects are derived entity or types *(this depends on whether the object contains an identity)*


### Types
Types are arbitrary structure that make up the entity and it's properties. Types are categorized as followed:

#### Primitive Types


#### Collection Types


#### Complex Types



### Transfer Objects





### Operations
Operations represent actions that MUST be registered to single endpoint 




---

# Graph Modeling with REST

When building out OGraph services the definition of 

- **Nodes**
- **Edges**
- **Operations**
- **Types**
- 


An OGraph model is a schema definition of all 

This section provides instruction for how to define a OGraph model and it's given structures.

This sections provides a high-level description of the Graph Data Model. 

## Model Formats



The Graph Data Model represents the abstract data


# Graph with REST

## Labels
- All labels **MUST** be case-insensitive. This is because of the  case in-sensitivity of a URI.

## Node Rules

- A node **MUST** have an identity attribute.
- A node **MUST** have at least one label.
- All node labels **MUST** be linked to at least one or more rest segments

## Edge Rules
- When an edge is defined it **MUST** link to adjacent route within a given domain. This is **REQUIRED** as to prevent any data being resolved that is not represented via REST. If arbitrary edges are defined, then the application code **SHOULD** throw an error.
- Edges **SHOULD** be generic 
- An Edge's label should match a route currently being queried plus a preceding route parameter. For example, if the given route being queried is `/api/users`, and the edge label being resolved is addresses, then a correlating route of `/api/users/{userId}/addresses` should exist.

For example, if a `users` node is exposed with an `addresses` edge then there must be a corresponding endpoint for addresses: `GET https://localhost:8080/api/users/{userId}/addresses`. If this route is not present then the 

```
https://localhost:8080/api/users?query=project({
	userId
})
.project(addresses, { //
	addressId
})
```

In REST it is sometimes normal to have different routes to the same data. Take for example the following resource object:

```
{
	"resource": employee,
	"id": 123456,
	"companyId": 456984
}
```

In REST it is possible to enact the same operations on the employee resource via different routes:

- `/employees/123456`
- `/companies/456984/employees/123456`

While one route represents a node labeled employee entry the other represent a link from nodes labeled company to the em


## Routing
This section identifies route specifications and their correlation to Graph Entities.

1.  Compare the **Order** property of the route attribute.
2.  Look at each URI segment in the route template. For each segment, order as follows:
3.  Literal segments.
4.  Route parameters with constraints.
5.  Route parameters without constraints.
6.  Wildcard parameter segments with constraints.
7.  Wildcard parameter segments without constraints.
8.  In the case of a tie, routes are ordered by a case-insensitive ordinal string comparison (OrdinalIgnoreCase) of the route template

In terms of OGraph, routes represent labels 

- All endpoints with the same route, including those with preceding route parameters, **MUST** return the same node object. 
- An Edges must represent a adjacent route. For example if there is a endpoints to resolve `/api/users` with a default edg
- For example if I have a edge called `works_at` between an `employees` and `companies` nodes while query the following endpoint: `GET /api/employees` then there should be an endpoint representing that relationship as followed: `GET /api/employees/{employeeId}/companies`

## Commands & Queries



**Commands:**
- POST
- PUT
- DELETE

Custom Methods:


Endpoints 

Commands **MAY** allow data to be queried on success of a state change if the server allows.


# Versioning

---
# Response: Status Codes

## 200 - OK


## 201 - Created

A 201 **SHOULD** only be returned from **Command** Endpoints on successful operations.

A client ma

---
# Request & Response: Header Fields

## Common Headers

### Header Content-Type
### Header Content-Encoding
### Header Content-Language
### Header Content-Length
### Header OData-Version


## Request Headers
### Header Accept
### Header Accept-Charset
### Header Accept-Language
### Header If-Match
### Header If-None-Match
### Header Isolation (OData-Isolation)
### Header OData-MaxVersion
### Header Prefer
#### Preference allow-entityreferences (odata.allow-entityreferences)
#### Preference callback (odata.callback)
#### Preference continue-on-error (odata.continue-on-error)
#### Preference include-annotations (odata.include-annotations)
#### Preference maxpagesize (odata.maxpagesize)
#### Preference omit-values
#### Preference return=representation and return=minimal
#### Preference respond-async
#### Preference track-changes (odata.track-changes)
##### Preference wait

## Response Headers
### Header AsyncResult
### Header ETag
### Header Location
### Header OData-EntityId
### Header OData-Error
### Header Preference-Applied
### Header Retry-After
### Header Vary




---
# Request & Response: Formats
The primary formats utilized in the Open Graph Protocol should be either `application/xml` or `application/json` 

Request and response **SHOULD** always be in the same format. The exception are either media streams or 

## Format Extensibility
A server and client **May** 
# Server

## Reserved Routes

### Metadata URL - /$graph
The graph endpoint ( `GET /$graph` ) is a metadata URL that returns a schema definition of the domain. 
Retrieves the `JSON` or `XML` graph model of a given domain.

### Batching URL - /$batch

## Requesting Data

All REST services within a given OGraph model **MAY** allow for any data to be retrievable


# Client

# Query Language
The OGraph query language is the primary query language used to query data on OGraph REST services. A client **SHOULD** always send a query via URL query parameter denoted with `$query`, though it **MAY** send it in the body of the request if the REST service allows it.

A server **MAY** allow for data to be queried after state changes.


**Sample Request**

```HTTP
https://endpoint.com/api/users?$query=variables({
    take: 20
    skip: 40
})
	# Root Query
.project({ 
    userId
    firstName
    lastName
    middleName
    2.5 as ConstantValue # Constant Expression as an identifier
    (
	    firstName eq 'chase'
	) as isFirstNameCorrect, # Binary Expression as an identifier
    concat(
	    firstName, 
	    ' ', 
	    middleName, 
	    ' ', 
	    lastName
	) as fullName
})
.filter({
    and(
        startsWith(firstName, 'c', true),
        or(
            and(
                endsWith(middleName, 'e', true),
                age eq 12
            )
        )
    )
})
.page({
    take @take
    skip @skip
})
.sort({
    toLower(firstName) desc
})

	# Edge Query
.project(roles, {
    roleName
})
.filter(roles, {     
    isActive eq true
})
.page(roles, {
    take @take
    skip @skip
})
.sort(roles, {
    toLower(roleName) desc
})
.project(roles/roleAssignments, {

})
```


### Projections .project
The `.project({})` key word is responsible for return select properties of the given node associated to the REST. **Root** projections, that is that they 

### Filtering .filter

The `.filter({})`




## Client & Server Responsibilities



### Client




