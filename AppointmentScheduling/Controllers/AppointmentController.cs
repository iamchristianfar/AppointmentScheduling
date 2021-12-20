using AppointmentScheduling.Services;
using AppointmentScheduling.Utility;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppointmentScheduling.Controllers
{
    public class AppointmentController : Controller
    {
        private readonly IAppointmentService _Helper;
        public AppointmentController(IAppointmentService appointmentService)
        {
            _Helper = appointmentService;
        }
        public IActionResult Index()
        {
           ViewBag.Duration = Helper.GetTimeDropDown();
           ViewBag.DoctorList = _Helper.GetDoctorList();
           ViewBag.PatientList = _Helper.GetPatientList();
            return View();
        }
    } 
}
