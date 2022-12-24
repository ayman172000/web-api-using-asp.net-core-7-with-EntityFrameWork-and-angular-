using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using exam.Models;
using exam.Models.Request;

namespace exam.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class DepartementsController : ControllerBase
    {
        private readonly DbSDContext _context;

        public DepartementsController(DbSDContext context)
        {
            _context = context;
        }

        // GET: api/Departements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Departement>>> Getdepartements()
        {
          if (_context.departements == null)
          {
              return NotFound();
          }
            return await _context.departements.ToListAsync();
        }

        // GET: api/Departements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Departement>> GetDepartement(long id)
        {
          if (_context.departements == null)
          {
              return NotFound();
          }
            var departement = await _context.departements.FindAsync(id);

            if (departement == null)
            {
                return NotFound();
            }

            return departement;
        }

        // PUT: api/Departements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDepartement(long id, UpdateDepReq req)
        {
            if (id != req.DepartementId)
            {
                return BadRequest();
            }

            var departement = await _context.departements.FindAsync(req.DepartementId);
            if (departement == null)
                throw new Exception("not found departement");
            departement.DepartementId = id;
            departement.CodeDep = req.CodeDep;
            departement.NameDep = req.NameDep;
            _context.Entry(departement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepartementExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Departements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Departement>> PostDepartement(DepartementReq req)
        {
            Departement departement = new Departement();
            departement.NameDep = req.NameDep;
            departement.CodeDep = req.CodeDep;
            _context.departements.Add(departement);
            await _context.SaveChangesAsync();

            //    return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
            return CreatedAtAction(nameof(GetDepartement), new { id = departement.DepartementId }, departement);
        }

        // DELETE: api/Departements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartement(long id)
        {
            if (_context.departements == null)
            {
                return NotFound();
            }
            var departement = await _context.departements.FindAsync(id);
            if (departement == null)
            {
                return NotFound();
            }

            _context.departements.Remove(departement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DepartementExists(long id)
        {
            return (_context.departements?.Any(e => e.DepartementId == id)).GetValueOrDefault();
        }
    }
}
