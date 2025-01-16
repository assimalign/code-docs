```
# This endpoint represents the starting vertex or vertices
https://endpoint.com/api/employees?query=
    .project({
        employeeId 
        firstName 
        lastName 
        middleName
    })
    .filter({
        startsWith(firstName, 'c')
    })
    .page({
        skip 0
        take 25
    })
    .edge('companies' as employeeCompany)      # <-- Returns a single vertex
        .project({                             # <-- A projection is required when returning a single vertex
            companyName
        })
        .edge('companies/address') # The Edge keyword takes in the edge path
            .project({
                streetOne
            })
            .filter({
                addressType eq 1
            })
            .edge('companies/addresses/types')
                .project({
                    typeId
                    typeName
                })
    .edge('addresses')
        .project({
			streetOne
			streetTwo
        })

```


# Keywords

The following key statements for implementing an OGraph Query

| Language                                              | Description |     |
| ----------------------------------------------------- | ----------- | --- |
| `vertex(identifier label)` `vertex(identifier label)` |             |     |
| `edge(identifier edgePath, object[] args [optional])` |             |     |
| `project(object properries)`                          |             |     |
| `sort(object properties)`                             |             |     |
| `filter(object params)`                               |             |     |
| `page(object params)`                                 |             |     |



# Operators






# Supported Functions


