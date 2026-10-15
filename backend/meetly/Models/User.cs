using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace meetly.Models
{
    public class User
    {
        public Guid Id = new();
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get; set; }
        public required string Name { get; set; }
    }
}